import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TaskData } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<TaskData> {
  constructor(private dataSource: DataSource) {
    super(TaskData, dataSource.createEntityManager());
  }

  //   async getById(id: string) {
  //     return this.findOne({ where: { id } });
  //   }
}
