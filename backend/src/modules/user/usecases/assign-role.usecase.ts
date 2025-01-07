// src/modules/user/usecases/assign-role.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class AssignRoleUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string, role: string): Promise<User> {
    // Assign a role to the user
    return this.userRepository.assignRole(userId, role);
  }
}
