import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TaskData } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.model';

@Injectable()
export class TaskRepository extends Repository<TaskData> {
  constructor(private dataSource: DataSource) {
    super(TaskData, dataSource.createEntityManager());
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskData> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  async DeleteTaskById(id: string): Promise<void> {
    // this.TaskData = this.tasks.filter((task) => task.id !== id);
    await this.delete(id);
  }
  async UpdateTaskById(id: string, status: TaskStatus): Promise<TaskData> {
    const task = await this.getById(id);
    task.status = status;
    await this.save(task);
    return task;
  }
  async getById(id: string) {
    const found = await this.findOne({
      where: { id },
    });

    if (found) {
      return found;
    } else {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
