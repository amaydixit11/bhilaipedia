// src/modules/article/usecases/edit-article.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { UpdateArticleDto } from '../dtos/update-article.dto';
import { Article } from '../entities/article.entity';

@Injectable()
export class EditArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(
    articleId: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleRepository.updateArticle(articleId, updateArticleDto);
  }
}
