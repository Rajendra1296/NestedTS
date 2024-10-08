// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';
// import { v4 as uuid } from 'uuid';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';

// import { InjectRepository } from '@nestjs/typeorm';
import { TaskData } from './task.entity';
// import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './Tasks.repository';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';
import { user } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  createQueryBuilder: any;
  constructor(
    private taskRepository: TaskRepository, // Ensure correct injection
  ) {}

  // async getTaskById(id: string): Promise<TaskEntity> {
  //   const task = await this.taskRepository.findOne({
  //     where: { id },
  //   });

  //   if (!task) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }

  //   return task;
  // }

  // private tasks: Task[] = [];

  // getALlTAasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string, User: user): Promise<TaskData> {
    return this.taskRepository.getById(id, User);
  }
  // getTaskById(id: string): Task {
  //   const data = this.tasks.find((task) => task.id === id);
  //   if (data) {
  //     return data;
  //   } else {
  //     throw new NotFoundException(`Any task is not found with id:${id}`);
  //   }
  // }
  async DeleteTaskById(id: string, User: user): Promise<void> {
    // this.TaskData = this.tasks.filter((task) => task.id !== id);
    return this.taskRepository.DeleteTaskById(id, User);
  }

  // DeleteTaskById(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  async UpdateTaskById(id: string, status: TaskStatus, User: user) {
    return this.taskRepository.UpdateTaskById(id, status, User);
  }
  // UpdateTaskById(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  async createTask(
    createTaskDto: CreateTaskDto,
    User: user,
  ): Promise<TaskData> {
    return this.taskRepository.createTask(createTaskDto, User);
  }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title: 'hello',
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getTasksWithFilter(filterdata: GetTasksFilterDto) {
  //   const { status, search } = filterdata;
  //   let tasks = this.getALlTAasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => (task.status = status));
  //     return tasks;
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return tasks;
  // }
  async GetTasks(
    filterDto: GetTasksFilterDto,
    User: user,
  ): Promise<TaskData[]> {
    return this.taskRepository.GetTasks(filterDto, User);
  }
}
