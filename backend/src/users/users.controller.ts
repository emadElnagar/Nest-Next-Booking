import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/new-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enums/user.enums';

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

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
