import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.userService.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(user: UserEntity) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
      expires_in:
        this.jwtService.decode(this.jwtService.sign(payload))['exp'] -
        Math.floor(Date.now() / 1000),
    };
  }

  async register(username: string, password: string) {
    return this.userService.register(username, password);
  }
}
