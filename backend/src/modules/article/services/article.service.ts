// src/modules/article/services/article.service.ts
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';

import { Article } from '../entities/article.entity';
import { CreateArticleUseCase } from '../usecases/createArticle.usecase';
import { EditArticleUseCase } from '../usecases/update-article.usecase';
import { ViewArticleUseCase } from '../usecases/get-article.usecase';
import { DeleteArticleUseCase } from '../usecases/deleteArticle.usecase';
import { SaveDraftUseCase } from '../usecases/saveDraft.usecase';
import { PublishDraftUseCase } from '../usecases/publishArticle.usecase';
import { GetAllArticlesUseCase } from '../usecases/get-all-articles.usecase';

@Injectable()
export class ArticleService {
  constructor(
    private readonly createArticleUseCase: CreateArticleUseCase,
    private readonly editArticleUseCase: EditArticleUseCase,
    private readonly viewArticleUseCase: ViewArticleUseCase,
    private readonly getAllArticleUseCase: GetAllArticlesUseCase,
    private readonly deleteArticleUseCase: DeleteArticleUseCase,
    private readonly saveDraftUseCase: SaveDraftUseCase,
    private readonly publishDraftUseCase: PublishDraftUseCase,
  ) {}

  // Create Article
  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.createArticleUseCase.execute(createArticleDto);
  }

  // Update Article
  async updateArticle(
    articleId: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.editArticleUseCase.execute(articleId, updateArticleDto);
  }

  // Get Article by ID
  async getArticle(articleId: string): Promise<Article> {
    return this.viewArticleUseCase.execute({ article_id: articleId });
  }

  async getAllArticles(): Promise<Article[]> {
    return this.getAllArticleUseCase.execute(); // Fetch all articles
  }

  // Delete Article
  async deleteArticle(articleId: string): Promise<void> {
    await this.deleteArticleUseCase.execute({ article_id: articleId });
  }

  // Save Draft
  async saveDraft(articleId: string, content: string): Promise<void> {
    await this.saveDraftUseCase.execute(articleId, content);
  }

  // Publish Draft
  async publishDraft(articleId: string): Promise<void> {
    await this.publishDraftUseCase.execute({ article_id: articleId });
  }
}
