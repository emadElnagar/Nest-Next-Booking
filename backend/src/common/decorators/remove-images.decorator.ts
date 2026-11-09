import {
  applyDecorators,
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { unlink } from 'fs/promises';
import { join, basename } from 'path';

export function RemoveImages(folder: string) {
  return applyDecorators(
    UseInterceptors(
      new (class implements NestInterceptor {
        async intercept(context: ExecutionContext, next: CallHandler) {
          const request = context.switchToHttp().getRequest();
          const images: string[] = request.body.removeImages ?? [];

          await Promise.all(
            images.map((image) =>
              unlink(
                join(process.cwd(), 'uploads', folder, basename(image)),
              ).catch((error) => {
                if (error.code !== 'ENOENT') throw error;
              }),
            ),
          );

          return next.handle();
        }
      })(),
    ),
  );
}
