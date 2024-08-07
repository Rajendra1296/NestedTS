import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }
}
