// src/modules/user/usecases/update-profile.usecase.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserProfile } from '../entities/userProfile.entity';

@Injectable()
export class UpdateProfileUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> {
    // Update the user's profile with new data
    return this.userRepository.updateUserProfileData(userId, profileData);
  }
}
