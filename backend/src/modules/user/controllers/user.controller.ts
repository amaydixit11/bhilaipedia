// src/modules/user/controllers/user.controller.ts
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
  
  import { UserService } from '../services/user.service';
  import { CreateUserDto } from '../dtos/create-user.dto';
  import { UpdateProfileDto } from '../dtos/update-profile.dto';
  import { UserPresenter } from '../presenters/user.presenter'; // Assuming you have a presenter
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // POST endpoint for registering a new user
    @Post('register')
    async registerUser(@Body() createUserDto: CreateUserDto) {
      const user = await this.userService.registerUser(createUserDto);
      return UserPresenter.present(user); // Format the response with the presenter
    }
  
    // PUT endpoint for updating a user's profile
    @Put(':userId/profile')
    async updateProfile(
      @Param('userId') userId: string,
      @Body() updateUserProfileDto: UpdateProfileDto,
    ) {
      const updatedProfile = await this.userService.updateProfile(
        userId,
        updateUserProfileDto,
      );
      return UserPresenter.present(updatedProfile); // Format the response with the presenter
    }
  
    // GET endpoint for retrieving a user's profile
    @Get(':userId/profile')
    async getProfile(@Param('userId') userId: string) {
      const profile = await this.userService.getProfile(userId);
      return UserPresenter.present(profile); // Format the response with the presenter
    }
  
    // GET endpoint for retrieving a user's activity log
    @Get(':userId/activity')
    async getUserActivity(@Param('userId') userId: string) {
      const activity = await this.userService.getUserActivity(userId);
      return activity.map(UserPresenter.present); // Format each activity with the presenter
    }
  
    // DELETE endpoint for deleting a user account
    @Delete(':userId')
    async deleteUser(@Param('userId') userId: string) {
      await this.userService.deleteUser(userId);
      return { message: 'User account deleted successfully' };
    }
  
    // PUT endpoint for assigning a role to a user
    @Put(':userId/role')
    async assignRole(
      @Param('userId') userId: string,
      @Body('role') role: string,
    ) {
      const user = await this.userService.assignRole(userId, role);
      return UserPresenter.present(user); // Format the response with the presenter
    }
  }
  