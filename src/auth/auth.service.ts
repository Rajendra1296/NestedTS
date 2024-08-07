import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './users.repository';
// import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }
  async signIn(authCredentialDto: AuthCredentialsDto): Promise<string> {
    const { username, password } = authCredentialDto;
    const userExists = await this.userRepository.findOne({
      where: { username },
    });
    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      return 'success';
    } else {
      throw new UnauthorizedException('please check your login credentials');
    }
  }
}
