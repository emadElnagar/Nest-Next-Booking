import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepo: Repository<Room>,
  ) {}

  // Create a new room
  createRoom(data: Partial<Room>) {
    const room = this.roomRepo.create(data);
    return this.roomRepo.save(room);
  }
}
