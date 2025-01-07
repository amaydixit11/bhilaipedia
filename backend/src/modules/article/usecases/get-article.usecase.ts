// src/modules/article/usecases/view-article.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';

import { Article } from '../entities/article.entity';
import { ArticleIdDto } from '../dtos/articleId.dto';

@Injectable()
export class ViewArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(articleIdDto: ArticleIdDto): Promise<Article> {
    return this.articleRepository.findById(articleIdDto.article_id);
  }
}
