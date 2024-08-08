import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './users.repository';
import { PayLoadIdentifier } from './payload.identifier';
import { user } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      secretOrKey: 'topsecret99',
      //   ignoreExpiration: false,
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: PayLoadIdentifier): Promise<user> {
    const { username } = payload;
    const user1 = await this.userRepository.findOne({ where: { username } });
    if (!user1) {
      throw new UnauthorizedException();
    }
    return user1;
  }
}
