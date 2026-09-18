import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dtos/new-room.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { PermissionsGuard } from '../authorization/guards/permissions.guard';
import { Permissions } from '../authorization/decorators/permissions.decorator';
import { Permission } from '../authorization/enums/permission.enum';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { ArrayFilesCountPipe } from './pipes/array-files-count.pipe';
import { UseRoomImagesUpload } from './decorators/room-images-upload.decorator';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // ==========================================
  // Create a new room
  // ==========================================
  @Post()
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.CREATE_ROOM)
  @UseRoomImagesUpload()
  createRoom(
    @Body() data: CreateRoomDto,
    @UploadedFiles(new ArrayFilesCountPipe(3, 6)) images: Express.Multer.File[],
  ): Promise<Room> {
    const imagePaths: string[] = images.map((file) =>
      file.path.replace(/\\/g, '/'),
    );
    return this.roomsService.createRoom(data, imagePaths);
  }

  // ==========================================
  // Get all rooms
  // ==========================================
  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  // ==========================================
  // Get a single room
  // ==========================================
  @Get(':id')
  getRoom(@Param('id') id: string): Promise<Room | null> {
    return this.roomsService.getRoom(id);
  }

  // ==========================================
  // Update a room
  // ==========================================
  @Patch(':id')
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.UPDATE_ROOM)
  @UseRoomImagesUpload()
  updateRoom(
    @Param('id') id: string,
    @Body() data: UpdateRoomDto,
    @UploadedFile() images?: Express.Multer.File[],
  ): Promise<Room> {
    const newImagesPaths =
      images?.map((file) => file.path.replace(/\\/g, '/')) || [];
    return this.roomsService.updateRoom(id, data, newImagesPaths);
  }

  // ==========================================
  // Delete a room
  // ==========================================
  @Delete(':id')
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.DELETE_ROOM)
  async deleteRoom(@Param('id') id: string): Promise<{ message: string }> {
    await this.roomsService.deleteRoom(id);
    return { message: 'Room deleted successfully' };
  }
}
