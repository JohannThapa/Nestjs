import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PaginationDto {
  @ApiPropertyOptional()
  @IsOptional({ groups: ['find'] })
  skip?: number;

  @ApiPropertyOptional({
    default: 100,
  })
  @IsOptional({ groups: ['find'] })
  limit?: number;

  @IsOptional({ groups: ['find'] })
  sort?: string;
}
