import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './Tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskData } from './task.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaskData]), AuthModule],
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
  exports: [TypeOrmModule],
})
export class TasksModule {}
