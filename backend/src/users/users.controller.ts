import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  // Find a single user (by id)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUser(id);
  }

  // Find user by email
  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  // Update a user
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<updateUserDto>) {
    const { role, ...rest } = dto;
    return this.usersService.update(id, {
      ...rest,
      ...(role !== undefined ? { role: role as UserRole } : {}),
    });
  }

  // Delete user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
