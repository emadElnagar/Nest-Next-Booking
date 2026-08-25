import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { PermissionsGuard } from '../authorization/guards/permissions.guard';
import { UseGuards } from '@nestjs/common';
import { Permissions } from '../authorization/decorators/permissions.decorator';
import { Permission } from '../authorization/enums/permission.enum';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // Create a new room
  @Post()
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.CREATE_ROOM)
  createRoom(@Body() data: CreateRoomDto): Promise<Room> {
    return this.roomsService.createRoom(data);
  }

  // Get all rooms
  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  // Get a single room
  @Get(':id')
  getRoom(id: string): Promise<Room> {
    return this.roomsService.getRoom(id);
  }
}
