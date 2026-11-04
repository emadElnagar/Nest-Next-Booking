import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { PermissionsGuard } from '../authorization/guards/permissions.guard';
import { Permissions } from '../authorization/decorators/permissions.decorator';
import { Permission } from '../authorization/enums/permission.enum';
import { RoomTypeService } from './room-type.service';
import { UseRoomImagesUpload } from 'src/rooms/decorators/room-images-upload.decorator';
import { CreateRoomTypeDto } from './dtos/new-room-type.dto';
import { ArrayFilesCountPipe } from 'src/rooms/pipes/array-files-count.pipe';
import { RoomType } from './room-type.entity';

@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  // ==========================================
  // Create a new room
  // ==========================================
  @Post()
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @Permissions(Permission.CREATE_ROOM)
  @UseRoomImagesUpload()
  createRoom(
    @Body() data: CreateRoomTypeDto,
    @UploadedFiles(new ArrayFilesCountPipe(3, 6)) images: Express.Multer.File[],
  ): Promise<RoomType> {
    const imagePaths: string[] = images.map((file) =>
      file.path.replace(/\\/g, '/'),
    );
    return this.roomTypeService.createRoom(data, imagePaths);
  }
}
