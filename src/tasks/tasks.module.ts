import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './Tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskNESTS } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskNESTS])],
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
  exports: [TypeOrmModule],
})
export class TasksModule {}
