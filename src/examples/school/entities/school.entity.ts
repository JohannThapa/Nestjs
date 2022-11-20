import { SchoolTypeEnum } from 'src/common/enums/school-type.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schools')
export class SchoolEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true, length: 1000, unique: true })
  public name: string;

  @Column({
    type: 'enum',
    enum: SchoolTypeEnum,
    default: SchoolTypeEnum.OTHERS,
  })
  type: SchoolTypeEnum;

  @Column({ nullable: false, length: 1000 })
  public address: string;

  @Column()
  public description: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
