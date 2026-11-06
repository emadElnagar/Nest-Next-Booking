import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export function UploadImages(folder: string, maxCount = 6) {
  return applyDecorators(
    UseInterceptors(
      FilesInterceptor('images', maxCount, {
        storage: diskStorage({
          destination: join(process.cwd(), 'uploads', folder),
          filename: (req, file, callback) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);

            callback(
              null,
              `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`,
            );
          },
        }),
      }),
    ),
  );
}
