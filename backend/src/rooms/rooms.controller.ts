import { Body, Controller, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @Post()
  createRoom(@Body() data: CreateRoomDto): Promise<Room> {
    return this.roomsService.createRoom(data);
  }
}
