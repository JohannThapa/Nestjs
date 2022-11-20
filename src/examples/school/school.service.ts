import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { ISchool } from 'src/common/interfaces/school/school.interface';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolEntity } from './entities/school.entity';

@Injectable()
export class SchoolService {
  schools: ISchool[] = [];

  constructor(
    @InjectRepository(SchoolEntity)
    private readonly schoolPostRepository: Repository<SchoolEntity>,
  ) {}

  create(createSchoolDto: CreateSchoolDto) {
    const newUser = this.schoolPostRepository.create(createSchoolDto);
    return this.schoolPostRepository.save(newUser);
  }

  findAll() {
    return from(this.schoolPostRepository.find());
  }

  public async getAll(): Promise<SchoolEntity[]> {
    return this.schoolPostRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
