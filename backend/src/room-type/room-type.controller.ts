import {
  Controller,
  Post,
  Body,
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Get,
} from '@nestjs/common';
import { RoomTypesService } from './room-type.service';
import { CreateRoomTypeDto } from './dtos/new-room-type.dto';
import { UploadImages } from '../common/decorators/upload-images.decorator';

@Controller('room-types')
export class RoomTypesController {
  constructor(private readonly roomTypesService: RoomTypesService) {}

  // ==========================================
  // Create a new room type
  // ==========================================
  @Post()
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
}
