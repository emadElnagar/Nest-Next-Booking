import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  // Create a new user
  create(data: Partial<User>) {
    return this.userRepo.save(data);
  }

  // Find a single user
  findUser(id: string) {
    return this.userRepo.findOne({ where: { id } });
  }

  // Find all users
  findAll() {
    return this.userRepo.find();
  }

  // Update a user
  async update(id: string, data: Partial<User>) {
    const user = await this.findUser(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    Object.assign(user, data);
    return this.userRepo.save(user);
  }

  // Delete user
  async delete(id: string) {
    const user = await this.findUser(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return this.userRepo.remove(user);
  }
}
