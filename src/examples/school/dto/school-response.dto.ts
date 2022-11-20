import { ApiProperty } from '@nestjs/swagger';
import { SchoolEntity } from '../entities/school.entity';

export class SchoolSuccessResponseDto {
  @ApiProperty({
    default: true,
  })
  success: true;

  @ApiProperty({
    type: [SchoolEntity],
  })
  result: SchoolEntity[];
}

export class SchoolErrorResponseDto {
  @ApiProperty({
    default: false,
  })
  success: false;

  @ApiProperty()
  error: any;
}
