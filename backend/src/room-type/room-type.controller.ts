import {
  Controller,
  Post,
  Body,
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RoomTypesService } from './room-type.service';
import { CreateRoomTypeDto } from './dtos/new-room-type.dto';
import { UploadImages } from '../common/decorators/upload-images.decorator';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { PermissionsGuard } from '../authorization/guards/permissions.guard';
import { Permissions } from '../authorization/decorators/permissions.decorator';
import { Permission } from '../authorization/enums/permission.enum';

@Controller('room-types')
export class RoomTypesController {
  constructor(private readonly roomTypesService: RoomTypesService) {}

  // ==========================================
  // Create a new room type
  // ==========================================
  @Post()
  @UseGuards(AccessTokenGuard, PermissionsGuard)
  @UploadImages('rooms', 6)
  createRoomType(
    @Body() createRoomTypeDto: CreateRoomTypeDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 5 * 1024 * 1024,
          }),
          new FileTypeValidator({
            fileType: /^image\/(jpeg|jpg|png|webp)$/,
          }),
        ],
        fileIsRequired: true,
      }),
    )
    images: Express.Multer.File[],
  ) {
    return this.roomTypesService.createRoomType(createRoomTypeDto, images);
  }

  // ==========================================
  // Get all room types
  // ==========================================
  @Get()
  getAllRoomTypes() {
    return this.roomTypesService.getAllRoomTypes();
  }

  // ==========================================
  // Get single room type
  // ==========================================
  @Get(':id')
  getRoomType(@Param('id') id: string) {
    return this.roomTypesService.getRoomType(id);
  }

  // ==========================================
  // Update room type
  // ==========================================
  @Patch(':id')
  @UploadImages('rooms', 6)
  updateRoomType(
    @Param('id') id: string,
    @Body() updateRoomTypeDto: CreateRoomTypeDto,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    return this.roomTypesService.updateRoomType(
      id,
      updateRoomTypeDto,
      images.map((image) => image.path),
    );
  }

  // ==========================================
  // Delete room type
  // ==========================================
  @Delete(':id')
  deleteRoomType(@Param('id') id: string) {
    return this.roomTypesService.deleteRoomType(id);
  }
}
