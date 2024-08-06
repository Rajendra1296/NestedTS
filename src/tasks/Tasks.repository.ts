import { Injectable } from '@nestjs/common';
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
  //   async getById(id: string) {
  //     return this.findOne({ where: { id } });
  //   }
}
