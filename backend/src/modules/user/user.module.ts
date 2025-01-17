// src/modules/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserProfile } from './entities/userProfile.entity';
import { UserActivity } from './entities/userActivity.entity';
import { RegisterUserUseCase } from './usecases/register-user.usecase';
import { DeleteUserUseCase } from './usecases/delete-user.usecase';
import { AssignRoleUseCase } from './usecases/assign-role.usecase';
import { UpdateProfileUseCase } from './usecases/update-profile.usecase';
import { ViewProfileUseCase } from './usecases/view-profile.usecase';
import { ViewActivityUseCase } from './usecases/view-activity.usecase';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, UserActivity])],
  controllers: [UserController],
  providers: [
    UserService,
    RegisterUserUseCase,
    DeleteUserUseCase,
    AssignRoleUseCase,
    UpdateProfileUseCase,
    ViewProfileUseCase,
    ViewActivityUseCase,
    UserRepository
  ],
  exports: [UserService],
})
export class UserModule {}
