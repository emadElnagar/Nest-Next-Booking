import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomType } from './room-type.entity';
import { CreateRoomTypeDto } from './dtos/new-room-type.dto';
import { UpdateRoomTypeDto } from './dtos/update-room-type.dto';
import { unlink } from 'fs/promises';
import { basename, join } from 'path/win32';

@Injectable()
export class RoomTypesService {
  constructor(
    @InjectRepository(RoomType)
    private readonly roomTypeRepo: Repository<RoomType>,
  ) {}
  // ==========================================
  // Create a new room type
  // ==========================================
  async createRoomType(
    createRoomTypeDto: CreateRoomTypeDto,
    images: Express.Multer.File[],
  ): Promise<RoomType> {
    const existingRoomType = await this.roomTypeRepo.findOne({
      where: { name: createRoomTypeDto.name },
    });

    if (existingRoomType) {
      throw new ConflictException('Room type already exists');
    }

    const roomType = this.roomTypeRepo.create({
      ...createRoomTypeDto,
      basePrice: createRoomTypeDto.basePrice.toString(),
      images: images.map((image) => image.filename),
    });

    return await this.roomTypeRepo.save(roomType);
  }

  // ==========================================
  // Get all room types
  // ==========================================
  async getAllRoomTypes(): Promise<RoomType[]> {
    return await this.roomTypeRepo.find();
  }

  // ==========================================
  // Get single room type
  // ==========================================
  async getRoomType(id: string): Promise<RoomType> {
    const roomType = await this.roomTypeRepo.findOne({
      where: { id },
    });

    if (!roomType) {
      throw new ConflictException('Room type not found');
    }

    return roomType;
  }

  // ==========================================
  // Update a room type
  // ==========================================
  async updateRoom(
    id: string,
    data: UpdateRoomTypeDto,
    newImagesPaths: string[],
  ): Promise<RoomType> {
    const roomType = await this.roomTypeRepo.findOne({
      where: { id },
    });

    if (!roomType) {
      throw new NotFoundException('Room Type not found');
    }

    const oldImages = roomType.images ?? [];

    Object.assign(roomType, data);

    if (newImagesPaths.length > 0) {
      roomType.images = newImagesPaths;
    }

    const updatedRoom = await this.roomTypeRepo.save(roomType);

    // Delete old images after successful database update
    if (newImagesPaths.length > 0) {
      await Promise.all(
        oldImages.map((image) =>
          unlink(
            join(process.cwd(), 'uploads', 'rooms', basename(image)),
          ).catch((error) => {
            if (error.code !== 'ENOENT') throw error;
          }),
        ),
      );
    }

    return updatedRoom;
  }
}
