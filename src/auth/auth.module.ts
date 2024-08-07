import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { user } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  providers: [AuthService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
