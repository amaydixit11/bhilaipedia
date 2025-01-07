// src/modules/user/usecases/delete-user.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<void> {
    // Delete user by ID
    return this.userRepository.deleteUser(userId);
  }
}
