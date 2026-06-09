import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dtos/register-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // User register
  async signup(data: RegisterDto) {
    const exists = await this.usersService.findByEmail(data.email);

    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.usersService.create({
      email: data.email,
      password: hashedPassword,
    });

    return this.generateTokens(user.id, user.email);
  }

  // Generate JWT token
  private async generateTokens(userId: string, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: 'ACCESS_SECRET',
      expiresIn: '15m',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: 'REFRESH_SECRET',
      expiresIn: '7d',
    });

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.usersService.update(userId.toString(), {
      refreshToken: hashedRefreshToken,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
