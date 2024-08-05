import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getALlTAasks(): Task[] {
    return this.tasks;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  DeleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  UpdateTaskById(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title: 'hello',
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getTasksWithFilter(filterdata: GetTasksFilterDto) {
    const { status, search } = filterdata;
    let tasks = this.getALlTAasks();
    if (status) {
      tasks = tasks.filter((task) => (task.status = status));
      return tasks;
    }
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return tasks;
  }
}
