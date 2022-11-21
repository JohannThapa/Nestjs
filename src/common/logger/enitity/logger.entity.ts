import { ENUM_REQUEST_METHOD } from 'src/common/request/enums/request.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ENUM_LOGGER_LEVEL } from '../constants/logger.enum';

@Entity()
class LoggerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  public context: string;

  @Column({ type: 'enum', enum: ENUM_LOGGER_LEVEL })
  level: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  bodies: object;

  @Column({ type: 'enum', enum: ENUM_REQUEST_METHOD })
  method: ENUM_REQUEST_METHOD;

  @Column()
  params: object;

  @Column()
  statusCode: number;

  @Column()
  path: string;

  @Column()
  role: string;
}

export default LoggerEntity;
