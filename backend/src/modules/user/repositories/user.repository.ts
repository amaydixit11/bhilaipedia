// src/modules/user/repositories/user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserProfile } from '../entities/userProfile.entity';
import { UserActivity } from '../entities/userActivity.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,

    @InjectRepository(UserActivity)
    private readonly userActivityRepository: Repository<UserActivity>,
  ) {}

  // Create User (Registration)
  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  // Update User Profile
  async updateUserProfile(
    userId: string,
    updates: Partial<User>,
  ): Promise<User> {
    await this.userRepository.update({ user_id: userId }, updates);
    return this.userRepository.findOne({ where: { user_id: userId } });
  }

  // Find User by ID
  async findById(userId: string): Promise<User> {
    return this.userRepository.findOne({ where: { user_id: userId } });
  }

  // Find User by Email (for login, etc.)
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Delete User Account
  async deleteUser(userId: string): Promise<void> {
    await this.userRepository.delete({ user_id: userId });
  }

  // Assign Role to User
  async assignRole(userId: string, role: string): Promise<User> {
    await this.userRepository.update({ user_id: userId }, { role });
    return this.userRepository.findOne({ where: { user_id: userId } });
  }

  // Get User Profile
  async getUserProfile(userId: string): Promise<UserProfile> {
    return this.userProfileRepository.findOne({ where: { user_id: userId } });
  }

  // Create/Update User Profile
  async updateUserProfileData(userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> {
    const existingProfile = await this.userProfileRepository.findOne({ where: { user_id: userId } });
    if (existingProfile) {
      return this.userProfileRepository.save({ ...existingProfile, ...profileData });
    }
    const newProfile = this.userProfileRepository.create({ user_id: userId, ...profileData });
    return this.userProfileRepository.save(newProfile);
  }

  // View User Activity
  async getUserActivity(userId: string): Promise<UserActivity[]> {
    return this.userActivityRepository.find({ where: { user_id: userId } });
  }

  // Log User Activity
  async logUserActivity(userId: string, activity: Partial<UserActivity>): Promise<UserActivity> {
    const newActivity = this.userActivityRepository.create({ user_id: userId, ...activity });
    return this.userActivityRepository.save(newActivity);
  }
}
