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
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { CommentModule } from './modules/comment/comment.module';
import { RbacModule } from './modules/rbac/rbac.module';

@Module({
  imports: [AuthModule, 
    UserModule, 
    ArticleModule, 
    DiscussionModule, 
    ModerationModule, 
    RewardsModule, 
    SearchModule, 
    CommonModule, 
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'bhilaipedia',
      autoLoadEntities: true,
      synchronize: true, // Disable in production
    }),
    CategoryModule,
    CommentModule,
    RbacModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
