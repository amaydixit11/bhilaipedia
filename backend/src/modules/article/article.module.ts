// src/modules/article/article.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './controllers/article.controller';
import { ArticleService } from './services/article.service';
import { Article } from './entities/article.entity';
import { ArticleRepository } from './repositories/article.repository';
import { CreateArticleUseCase } from './usecases/createArticle.usecase';
import { ViewArticleUseCase } from './usecases/get-article.usecase';
import { GetAllArticlesUseCase } from './usecases/get-all-articles.usecase';
import { SaveDraftUseCase } from './usecases/saveDraft.usecase';
import { PublishDraftUseCase } from './usecases/publishArticle.usecase';
import { DeleteArticleUseCase } from './usecases/deleteArticle.usecase';
import { CategorizeArticleUseCase } from './usecases/categorizeArticle.usease';
import { EditArticleUseCase } from './usecases/update-article.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [
    ArticleService,
    ArticleRepository,
    CreateArticleUseCase,
    EditArticleUseCase,
    ViewArticleUseCase,
    GetAllArticlesUseCase,
    SaveDraftUseCase,
    PublishDraftUseCase,
    DeleteArticleUseCase,
    CategorizeArticleUseCase,
  ],
})
export class ArticleModule {}
