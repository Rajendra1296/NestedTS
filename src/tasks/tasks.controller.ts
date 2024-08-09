// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Query,
//   UsePipes,
//   ValidationPipe,
// } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskData } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { user } from 'src/auth/user.entity';
// import { Task, TaskStatus } from './task.model';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(public tasksService: TasksService) {}
  // @Get()
  // getAllTasks(): Task[] {
  //   return this.tasksService.getALlTAasks();
  // }
  // @Get()
  // @UsePipes(ValidationPipe)
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilter(filterDto);
  //   } else {
  //     return this.tasksService.getALlTAasks();
  //   }
  // }
  @Get()
  @UsePipes(ValidationPipe)
  getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @GetUser() User: user,
  ): Promise<TaskData[]> {
    return this.tasksService.GetTasks(filterDto, User);
  }
  // @Get('/:id')
  // getTAskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }
  @Delete('/:id')
  DeleteTaskById(@Param('id') id: string, @GetUser() User: user) {
    return this.tasksService.DeleteTaskById(id, User);
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
    @GetUser() User: user,
  ): Promise<TaskData> {
    return this.tasksService.UpdateTaskById(id, status, User);
  }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(
  //   @Body() createTaskDto: CreateTaskDto,
  //   // @Body('title') title: string,
  //   // @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(createTaskDto);
  //   // console.log('title', title);
  //   // console. log('description', description);
  // }
  @Get('/:id')
  async getTaskById(
    @Param('id') id: string,
    @GetUser() User: user,
  ): Promise<TaskData> {
    try {
      return await this.tasksService.getTaskById(id, User);
    } catch (error) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() User: user,
  ): Promise<TaskData> {
    return this.tasksService.createTask(createTaskDto, User);
  }
}
