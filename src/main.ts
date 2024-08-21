import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';
import { ValidationPipe, Logger } from '@nestjs/common';
import { prototype } from 'events';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = 3000;
  await app.listen(port);
  logger.log(`application listening on port ${prototype}`);
}
bootstrap();
