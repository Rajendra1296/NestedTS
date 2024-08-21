import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }
  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const salt = await bcrypt.genSalt();
    const HashedPassword = await bcrypt.hash(password, salt);
    console.log(password);
    console.log(salt);
    console.log(HashedPassword);

    const user = this.create({ username, password: HashedPassword });
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
