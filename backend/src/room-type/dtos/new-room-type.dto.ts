import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BedType } from '../enums/bed-type.enum';

export class CreateRoomTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsEnum(BedType)
  bedType: BedType;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  capacity: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxChildren?: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  basePrice: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  amenities?: string[] | null;
}
