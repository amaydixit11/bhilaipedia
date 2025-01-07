// src/modules/user/usecases/register-user.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto'; // Assuming CreateUserDto is defined with user fields

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    // Create and save a new user (registration)
    return this.userRepository.createUser(createUserDto);
  }
}
