import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';
@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }
  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Username is alredy used');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
