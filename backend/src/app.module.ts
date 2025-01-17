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
import { DatabaseConfig } from './config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    AuthModule, 
    UserModule, 
    ArticleModule, 
    DiscussionModule, 
    ModerationModule, 
    RewardsModule, 
    SearchModule, 
    CommonModule, 
    DatabaseModule,
    // TypeOrmModule.forRoot(typeOrmConfig),
    CategoryModule,
    CommentModule,
    RbacModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
