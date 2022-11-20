import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { SchoolTypeEnum } from 'src/common/enums/school-type.enum';

export class CreateSchoolDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  id: number;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  description: string;

  @ApiProperty({
    enum: SchoolTypeEnum,
    example: SchoolTypeEnum.OTHERS,
  })
  @IsString()
  @IsEnum(SchoolTypeEnum)
  type: SchoolTypeEnum;

  @ApiProperty({
    type: String,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: Date,
    default: new Date(),
  })
  createdAt: number;

  @ApiProperty({
    type: Date,
    default: new Date(),
  })
  updatedAt: number;
}
