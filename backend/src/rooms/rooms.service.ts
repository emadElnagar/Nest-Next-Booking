import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import path from 'path';
import fs from 'fs';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}

  // ==========================================
  // Create a new room
  // ==========================================
  async createRoom(data: CreateRoomDto, images: string[]): Promise<Room> {
    const room = this.roomRepo.create({
      ...data,
      images,
    });

    return this.roomRepo.save(room);
  }

  // ==========================================
  // Get all rooms
  // ==========================================
  getRooms() {
    return this.roomRepo.find();
  }

  // ==========================================
  // Get a single room
  // ==========================================
  async getRoom(id: string): Promise<Room | null> {
    const room = await this.roomRepo.findOne({
      where: { id },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return room;
  }

  // ==========================================
  // Update a room
  // ==========================================
  async updateRoom(
    id: string,
    data: UpdateRoomDto,
    newImagePaths: string[],
  ): Promise<Room> {
    const room = await this.roomRepo.findOne({ where: { id } });

    // Cleanup newly uploaded files from disk if room doesn't exist
    if (!room) {
      this.deleteImagesFromDisk(newImagePaths);
      throw new NotFoundException(`Room not found`);
    }

    // If new images were uploaded, delete old images from disk and replace them
    if (newImagePaths && newImagePaths.length > 0) {
      this.deleteImagesFromDisk(room.images);
      room.images = newImagePaths;
    }

    Object.assign(room, data);
    return await this.roomRepo.save(room);
  }

  // ==========================================
  // Delete a room
  // ==========================================
  async deleteRoom(id: string): Promise<void> {
    const room = await this.getRoom(id);

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    this.deleteImagesFromDisk(room.images);
    await this.roomRepo.remove(room);
  }

  // ==========================================
  // Delete images safely from disk
  // ==========================================
  private deleteImagesFromDisk(filePaths: string[]): void {
    if (!filePaths || filePaths.length === 0) return;

    for (const filePath of filePaths) {
      try {
        const fullPath = path.resolve(filePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      } catch (error) {
        console.error(`Failed to delete file at ${filePath}:`, error);
      }
    }
  }
}
