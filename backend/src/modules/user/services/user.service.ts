// src/modules/user/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto'; // Assuming you have this DTO
import { UpdateProfileDto } from '../dtos/update-profile.dto'; // Assuming you have this DTO
import { User } from '../entities/user.entity';
import { UserProfile } from '../entities/userProfile.entity';
import { UserActivity } from '../entities/userActivity.entity';

import { RegisterUserUseCase } from '../usecases/register-user.usecase';
import { DeleteUserUseCase } from '../usecases/delete-user.usecase';
import { AssignRoleUseCase } from '../usecases/assign-role.usecase';
import { UpdateProfileUseCase } from '../usecases/update-profile.usecase';
import { ViewProfileUseCase } from '../usecases/view-profile.usecase';
import { ViewActivityUseCase } from '../usecases/view-activity.usecase';

@Injectable()
export class UserService {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly assignRoleUseCase: AssignRoleUseCase,
    private readonly updateProfileUseCase: UpdateProfileUseCase,
    private readonly viewProfileUseCase: ViewProfileUseCase,
    private readonly viewActivityUseCase: ViewActivityUseCase,
  ) {}

  // Register a new user
  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    return this.registerUserUseCase.execute(createUserDto);
  }

  // Delete a user account
  async deleteUser(userId: string): Promise<void> {
    await this.deleteUserUseCase.execute(userId);
  }

  // Assign role to a user
  async assignRole(userId: string, role: string): Promise<User> {
    return this.assignRoleUseCase.execute(userId, role);
  }

  // Update a user's profile
  async updateProfile(userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> {
    return this.updateProfileUseCase.execute(userId, profileData);
  }

  // View a user's profile
  async getProfile(userId: string): Promise<UserProfile> {
    return this.viewProfileUseCase.execute(userId);
  }

  // View a user's activity log
  async getUserActivity(userId: string): Promise<UserActivity[]> {
    return this.viewActivityUseCase.execute(userId);
  }
}
