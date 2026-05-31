import { Injectable } from '@nestjs/common';
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
  create(user: Partial<User>) {
    return this.userRepo.save(user);
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
  async update(id: string, attrs: Partial<User>) {
    const user = await this.findUser(id);
    if (!user) {
      return 'User not found';
    }
    Object.assign(user, attrs);
    return this.userRepo.save(user);
  }
}
