import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUser } from './dtos/new-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enums/user.enums';
import { updateUserDto } from './dtos/update-user.dto';

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

  // Update a user
  @Patch(':id')
  update(id: string, @Body() dto: Partial<updateUserDto>) {
    const { role, ...rest } = dto;
    return this.usersService.update(id, {
      ...rest,
      ...(role !== undefined ? { role: role as UserRole } : {}),
    });
  }

  // Delete user
  @Delete(':id')
  remove(id: string) {
    return this.usersService.delete(id);
  }
}
