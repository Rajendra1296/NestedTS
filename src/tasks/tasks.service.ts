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

@Injectable()
export class TasksService {
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

  async getTaskById(id: string): Promise<TaskData> {
    return this.taskRepository.getById(id);
  }
  // getTaskById(id: string): Task {
  //   const data = this.tasks.find((task) => task.id === id);
  //   if (data) {
  //     return data;
  //   } else {
  //     throw new NotFoundException(`Any task is not found with id:${id}`);
  //   }
  // }
  async DeleteTaskById(id: string): Promise<void> {
    // this.TaskData = this.tasks.filter((task) => task.id !== id);
    return this.taskRepository.DeleteTaskById(id);
  }

  // DeleteTaskById(id: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  async UpdateTaskById(id: string, status: TaskStatus) {
    return this.taskRepository.UpdateTaskById(id, status);
  }
  // UpdateTaskById(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskData> {
    return this.taskRepository.createTask(createTaskDto);
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
}
