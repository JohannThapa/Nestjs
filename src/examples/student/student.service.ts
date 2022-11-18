import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { GenderEnum } from 'src/common/enums/gender.enum';
import { IStudent } from 'src/common/interfaces/student.interface';
import { StudentEntity } from 'src/models/student/student.entity';
import { StudentModel } from 'src/models/student/student.model';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create.dto';

@Injectable()
export class StudentService {
  students: IStudent[] = [];
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentPostRepository: Repository<StudentEntity>,
  ) {}
  createStudent(createStudentDto: CreateStudentDto) {
    const newUser = this.studentPostRepository.create(createStudentDto);
    return this.studentPostRepository.save(newUser);
  }
  findAllStudent(): Observable<IStudent[]> {
    return from(this.studentPostRepository.find());
  }
  public async getAll(): Promise<StudentEntity[]> {
    return this.studentPostRepository.find();
  }
}
