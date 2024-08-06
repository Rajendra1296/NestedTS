import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TaskNESTS } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<TaskNESTS> {
  constructor(private dataSource: DataSource) {
    super(TaskNESTS, dataSource.createEntityManager());
  }

  //   async getById(id: string) {
  //     return this.findOne({ where: { id } });
  //   }
}
