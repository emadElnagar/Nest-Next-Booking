import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/new-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enums/user.enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create a new user
  @Post()
  create(@Body() dto: CreateUser) {
    return this.usersService.create({
      ...dto,
      role: dto.role as UserRole,
    });
  }

  // Find all users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Find a single user
  @Get(':id')
  findOne(id: string) {
    return this.usersService.findUser(id);
  }
}
