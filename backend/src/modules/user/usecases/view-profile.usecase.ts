// src/modules/user/usecases/view-profile.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserProfile } from '../entities/userProfile.entity';

@Injectable()
export class ViewProfileUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<UserProfile> {
    // Get the user's profile data by ID
    return this.userRepository.getUserProfile(userId);
  }
}
