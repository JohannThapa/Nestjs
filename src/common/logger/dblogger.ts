import { Logger } from 'typeorm';
import { LoggerService } from '@nestjs/common';

export class DBLogger implements Logger {
  private context = '[DB]';

  constructor(public logger: LoggerService) {}

  public logQuery(query: string, parameters?: any[] | undefined): void {
    this.log('log', `Query: ${query} with Parameters: ${parameters}`);
  }

  public logQueryError(
    error: string,
    query: string,
    parameters?: any[] | undefined,
  ): void {
    this.log(
      'error',
      `Error: ${error} for Query: ${query} with Parameters: ${parameters}`,
    );
  }

  public logQuerySlow(
    time: number,
    query: string,
    parameters?: any[] | undefined,
  ): void {
    this.log(
      'warn',
      `SLOW (${time}) due to Query: ${query} with Parameters: ${parameters}`,
    );
  }

  public logSchemaBuild(message: string): void {
    this.log('log', message);
  }

  public logMigration(message: string): void {
    this.log('log', message);
  }

  public log(level: 'log' | 'info' | 'warn' | 'error', message: any): void {
    const logMessage = `${this.context} - ${message}`;
    if (level === 'log') {
      this.logger.log(logMessage);
    } else if (level === 'info') {
      this.logger.log(logMessage);
    } else if (level === 'warn') {
      this.logger.warn(logMessage);
    } else if (level === 'error') {
      this.logger.error(logMessage);
    }
  }
}
