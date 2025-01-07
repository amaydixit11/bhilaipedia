// src/modules/user/presenters/user.presenter.ts
import { User } from '../entities/user.entity';
import { UserProfile } from '../entities/userProfile.entity';
import { UserActivity } from '../entities/userActivity.entity';

export class UserPresenter {
  // Method to format the user response
  static present(user: User | UserProfile | UserActivity): any {
    if (user instanceof User) {
      return this.presentUser(user);
    } else if (user instanceof UserProfile) {
      return this.presentProfile(user);
    } else if (user instanceof UserActivity) {
      return this.presentActivity(user);
    }
    return user; // Return the user if no transformation is needed
  }

  // Format a basic user object (e.g., for registration or login)
  private static presentUser(user: User): any {
    return {
      id: user.user_id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    };
  }

  // Format user profile details
  private static presentProfile(profile: UserProfile): any {
    return {
      userId: profile.user_id,
      lastLogin: profile.last_login,
      bio: profile.bio,
      profileUrl: profile.profile_url,
      provider: profile.provider,
      socialLinks: profile.social_links,
    };
  }

  // Format user activity logs
  private static presentActivity(activity: UserActivity): any {
    return {
      activityId: activity.id,
      userId: activity.user_id,
      activityType: activity.activity_type,
      activityResourceType: activity.resource,
      activityResourceId: activity.resource_id,
      timestamp: activity.activity_timestamp,
    };
  }
}
