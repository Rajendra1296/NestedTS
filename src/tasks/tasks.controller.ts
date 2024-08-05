import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getALlTAasks();
  }
  @Get('/:id')
  getTAskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  @Delete('/:id')
  DeleteTaskById(@Param('id') id: string) {
    return this.tasksService.DeleteTaskById(id);
  }
  // @Patch('/:id')
  // UpdateTaskById(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.tasksService.UpdateTaskById(id, status);
  // }
  @Patch('/:id/:status')
  UpdateTaskById(
    @Param('id') id: string,
    @Param('status') status: TaskStatus,
  ): Task {
    return this.tasksService.UpdateTaskById(id, status);
  }
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    // @Body('title') title: string,
    // @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(createTaskDto);
    // console.log('title', title);
    // console. log('description', description);
  }
}
