import { GenderEnum } from 'src/common/enums/gender.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ nullable: true, length: 1000, unique: true })
  public name: string;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @CreateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  public phone: string;
  @Column({ nullable: false, length: 1000 })
  public address: string;
  @Column({ type: 'enum', enum: GenderEnum, default: GenderEnum.male })
  gender: GenderEnum;
  @Column({ nullable: false, default: 10 })
  public age: number;
  @Column({ nullable: false })
  public rollNo: number;
}
