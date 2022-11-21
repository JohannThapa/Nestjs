import { Injectable, ConsoleLogger } from '@nestjs/common';
import { ConsoleLoggerOptions } from '@nestjs/common/services/console-logger.service';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ENUM_LOGGER_LEVEL } from '../constants/logger.enum';
import { CreateLoggerDto } from '../dto/create-logger.dto';
import LoggerEntity from '../enitity/logger.entity';
import getLogLevels from '../utils/logger.util';
import LogsService from './logger.service';

@Injectable()
class CustomLoggerService extends ConsoleLogger {
  private readonly logsService: LogsService;

  constructor(
    @InjectRepository(LoggerEntity)
    private readonly loggerRepository: Repository<LoggerEntity>,
    context: string,
    options: ConsoleLoggerOptions,
    configService: ConfigService,
    logsService: LogsService,
  ) {
    const environment = configService.get('NODE_ENV');

    super(context, {
      ...options,
      logLevels: getLogLevels(environment === 'production'),
    });

    this.logsService = logsService;
  }
  info({
    id,
    description,
    method,
    params,
    bodies,
    path,
    statusCode,
  }: CreateLoggerDto): Promise<LoggerEntity> {
    const create: LoggerEntity = new LoggerEntity();
    create.level = ENUM_LOGGER_LEVEL.INFO;
    create.id = id;
    create.description = description;
    create.method = method;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    super.log.apply(this, [create]);
    const log = this.loggerRepository.create(create);
    return this.loggerRepository.save(log);
  }

  debug({
    id,
    description,
    method,
    params,
    bodies,
    path,
    statusCode,
  }: CreateLoggerDto): Promise<LoggerEntity> {
    const create: LoggerEntity = new LoggerEntity();
    create.level = ENUM_LOGGER_LEVEL.DEBUG;
    create.id = id;
    create.description = description;
    create.method = method;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    super.debug.apply(this, [create]);
    const log = this.loggerRepository.create(create);
    return this.loggerRepository.save(log);
  }

  error({
    id,
    description,
    method,
    params,
    bodies,
    path,
    statusCode,
  }: CreateLoggerDto): Promise<LoggerEntity> {
    const create: LoggerEntity = new LoggerEntity();
    create.level = ENUM_LOGGER_LEVEL.FATAL;
    create.id = id;
    create.description = description;
    create.method = method;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    super.error.apply(this, [create]);
    const log = this.loggerRepository.create(create);
    return this.loggerRepository.save(log);
  }

  warn({
    id,
    description,
    method,
    params,
    bodies,
    path,
    statusCode,
  }: CreateLoggerDto): Promise<LoggerEntity> {
    const create: LoggerEntity = new LoggerEntity();
    create.level = ENUM_LOGGER_LEVEL.WARM;
    create.id = id;
    create.description = description;
    create.method = method;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    super.warn.apply(this, [create]);
    const log = this.loggerRepository.create(create);
    return this.loggerRepository.save(log);
  }

  raw({
    id,
    level,
    description,
    method,
    params,
    bodies,
    path,
    statusCode,
  }: CreateLoggerDto): Promise<LoggerEntity> {
    const create: LoggerEntity = new LoggerEntity();
    create.level = level;
    create.id = id;
    create.description = description;
    create.method = method;
    create.params = params;
    create.bodies = bodies;
    create.path = path;
    create.statusCode = statusCode;
    const log = this.loggerRepository.create(create);
    return this.loggerRepository.save(log);
  }
}

export default CustomLoggerService;
