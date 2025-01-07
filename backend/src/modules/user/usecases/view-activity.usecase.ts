// src/modules/user/usecases/view-activity.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserActivity } from '../entities/userActivity.entity';

@Injectable()
export class ViewActivityUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<UserActivity[]> {
    // Get the user's activity log
    return this.userRepository.getUserActivity(userId);
  }
}
