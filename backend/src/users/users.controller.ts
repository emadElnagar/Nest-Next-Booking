import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dtos/new-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enums/user-role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUser) {
    return this.usersService.create({
      ...dto,
      role: dto.role as UserRole,
    });
  }
}
