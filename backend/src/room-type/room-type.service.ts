import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomType } from './room-type.entity';
import { CreateRoomTypeDto } from './dtos/new-room-type.dto';

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
}
