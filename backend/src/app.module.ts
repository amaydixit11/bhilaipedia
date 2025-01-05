import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';
import { DiscussionModule } from './modules/discussion/discussion.module';
import { ModerationModule } from './modules/moderation/moderation.module';
import { RewardsModule } from './modules/rewards/rewards.module';
import { SearchModule } from './modules/search/search.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [AuthModule, UserModule, ArticleModule, DiscussionModule, ModerationModule, RewardsModule, SearchModule, CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
