import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './Tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskData } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskData])],
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
  exports: [TypeOrmModule],
})
export class TasksModule {}
