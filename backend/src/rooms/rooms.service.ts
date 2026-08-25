import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}

  // Create a new room
  createRoom(data: CreateRoomDto): Promise<Room> {
    const room = this.roomRepo.create(data);
    return this.roomRepo.save(room);
  }

  // Get all rooms
  getRooms() {
    return this.roomRepo.find();
  }

  // Get a single room
  async getRoom(id: string): Promise<Room | null> {
    const room = await this.roomRepo.findOne({
      where: { id },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return room;
  }

  // Update a room
  async updateRoom(id: string, data: UpdateRoomDto): Promise<Room> {
    const room = await this.getRoom(id);
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    Object.assign(room, data);
    return this.roomRepo.save(room);
  }

  // Delete a room
  async deleteRoom(id: string): Promise<void> {
    const room = await this.getRoom(id);
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    await this.roomRepo.remove(room);
  }
}
