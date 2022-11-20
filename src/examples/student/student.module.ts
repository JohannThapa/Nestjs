import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/examples/student/entity/student.entity';
import { StudentRepository } from 'src/examples/student/student.repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports: [StudentService],
})
export class StudentModule {}
