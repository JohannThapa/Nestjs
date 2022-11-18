import { Injectable } from '@nestjs/common';
import { ReadResult } from 'src/common/interfaces/read-result/read-result.interface';
import { pageNumber } from 'src/common/utility/page-number';
import { CreateStudentDto } from 'src/examples/student/dto/create.dto';
import { GetStudentBodyDto } from 'src/examples/student/dto/get.dto';
import { PaginationDto } from 'src/examples/student/dto/pagination.dto';
import { DataSource, Repository } from 'typeorm';
import Address from './address.entity';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentRepository extends Repository<StudentEntity> {
  constructor(private dataSource: DataSource) {
    super(StudentEntity, dataSource.createEntityManager());
  }

  async createStudent(createStudent: CreateStudentDto): Promise<StudentEntity> {
    const student = new StudentEntity();
    student.id = Date.parse(new Date().toString());
    Object.assign(student, createStudent);

    const createdStudent = this.create(student);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newRecord = await this.save(createdStudent);
    return createdStudent;
  }

  getById(id: number): Promise<StudentEntity> {
    return this.findOne({ where: { id } });
  }

  async getAll(
    body: GetStudentBodyDto & PaginationDto,
    include_ids?: string[],
  ): Promise<ReadResult> {
    const query = this.createQueryBuilder('student')
      .take(body.limit)
      .skip(body.skip);

    const { name, age, gender } = body;
    const date: Date = new Date();
    if (name) {
      query.andWhere(`(first_name like :name OR last_name like :name )`, {
        name: `%${name}%`,
      });
    }
    if (gender) {
      query.andWhere(`(gender like :gender)`, { name: `%${gender}%` });
    }
    if (include_ids?.length > 0) {
      query.andWhere(`student.id IN (:...ids)`, { ids: include_ids });
    }

    if (age > 0) {
      query.andWhere('age >= :min', { min: 10 });
    }

    const [students, total] = (await query.getManyAndCount()) as [
      (StudentEntity & { address: Address })[],
      number,
    ];

    const results = students.map(({ name, address, ...student }) => ({
      ...student,
      id: Date.parse(date.toString()),
      createdAt: date,
      address: Object.assign(name, { address: address }),
    }));

    return {
      page: pageNumber(total, body.limit, body.skip),
      results,
      totalResults: total,
      totalPages: Math.ceil(total / (body.limit || 10)),
    };
  }
}
