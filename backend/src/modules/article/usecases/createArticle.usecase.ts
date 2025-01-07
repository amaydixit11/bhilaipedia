// src/modules/article/usecases/create-article.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { Article } from '../entities/article.entity';
import { ArticleFactory } from '../factories/article.factory';

@Injectable()
export class CreateArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(createArticleDto: CreateArticleDto): Promise<Article> {
    const article = ArticleFactory.createArticle(createArticleDto);
    return this.articleRepository.createArticle(article);
  }
}
