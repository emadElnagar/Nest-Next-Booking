import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
  authService: any;
  // User register
  @Post('register')
  async register(@Body() data: RegisterDto) {
    return this.authService.signup(data);
  }

  // User login
  @Post('login')
  async login(@Body() data: { email: string; password: string }) {
    return this.authService.login(data.email, data.password);
  }

  // User logout
  @Post('logout')
  async logout(@Body() data: { userId: string }) {
    return this.authService.logout(data.userId);
  }
}
