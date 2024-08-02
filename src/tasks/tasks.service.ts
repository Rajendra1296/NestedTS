import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getALlTAasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: '',
      title,
      description,
      status: 'OPEN',
    };
    return task;
  }
}
