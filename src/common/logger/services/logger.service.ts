import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoggerDto } from '../dto/create-logger.dto';
import LoggerEntity from '../enitity/logger.entity';

@Injectable()
export default class LogsService {
  constructor(
    @InjectRepository(LoggerEntity)
    private logsRepository: Repository<LoggerEntity>,
  ) {}

  async createLog(log: CreateLoggerDto) {
    const newLog = await this.logsRepository.create(log);
    await this.logsRepository.save(newLog, {
      data: {
        isCreatingLogs: true,
      },
    });
    return newLog;
  }
}
