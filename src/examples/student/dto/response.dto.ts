import { ApiProperty } from '@nestjs/swagger';
import { StudentEntity } from 'src/examples/student/entity/student.entity';

export class StudentSuccessResponseDto {
  @ApiProperty({
    default: true,
  })
  success: true;

  @ApiProperty({
    type: [StudentEntity],
  })
  result: StudentEntity[];
}

export class StudentErrorResponseDto {
  @ApiProperty({
    default: false,
  })
  success: false;

  @ApiProperty()
  error: any;
}
