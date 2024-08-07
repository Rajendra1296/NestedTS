import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';
import { Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';
@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }
  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
