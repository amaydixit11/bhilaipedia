// src/modules/article/usecases/get-all-articles.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { Article } from '../entities/article.entity';

@Injectable()
export class GetAllArticlesUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }
}
