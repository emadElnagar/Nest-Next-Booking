import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ArrayFilesCountPipe implements PipeTransform {
  constructor(
    private readonly min: number,
    private readonly max: number,
  ) {}

  transform(files: Express.Multer.File[]) {
    if (!files || files.length < this.min || files.length > this.max) {
      throw new BadRequestException(
        `You must upload between ${this.min} and ${this.max} images.`,
      );
    }
    return files;
  }
}
