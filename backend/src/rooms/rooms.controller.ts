import { Body, Controller, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @Post()
  createRoom(@Body() data: Partial<Room>) {
    return this.roomsService.createRoom(data);
  }
}
