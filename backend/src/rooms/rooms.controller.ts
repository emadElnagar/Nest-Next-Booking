import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { PermissionsGuard } from '../authorization/guards/permissions.guard';
import { Permissions } from '../authorization/decorators/permissions.decorator';
import { Permission } from '../authorization/enums/permission.enum';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // Create a new room
  @Post()
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Permissions(Permission.CREATE_ROOM)
  createRoom(
    @Body() data: CreateRoomDto,
    @UploadedFile() image: any,
  ): Promise<Room> {
    return this.roomsService.createRoom(data, image);
  }

  // Get all rooms
  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  // Get a single room
  @Get(':id')
  getRoom(@Param('id') id: string): Promise<Room | null> {
    return this.roomsService.getRoom(id);
  }

  // Update a room
  @Patch(':id')
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.UPDATE_ROOM)
  updateRoom(
    @Param('id') id: string,
    @Body() data: UpdateRoomDto,
    @UploadedFile() image: any,
  ): Promise<Room> {
    return this.roomsService.updateRoom(id, data, image);
  }

  // Delete a room
  @Delete(':id')
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.DELETE_ROOM)
  deleteRoom(@Param('id') id: string): Promise<void> {
    return this.roomsService.deleteRoom(id);
  }
}
