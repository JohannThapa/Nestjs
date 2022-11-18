import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module';
import { buildDocument } from './config/documentBuilder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const origins = [/\.nestjs\.com$/, 'http://localhost:3000'];
  origins.push(/localhost/);
  app.enableCors({
    origin: origins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  if (process.env.NODE_ENV !== 'production') {
    buildDocument(app);
  }
  await app.listen(configService.get<number>('PORT') || 8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
  // await app.listen(3000);
}
bootstrap();
