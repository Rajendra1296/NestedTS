import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
// import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }
}
