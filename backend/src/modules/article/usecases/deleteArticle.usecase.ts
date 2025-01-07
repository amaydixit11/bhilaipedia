// src/modules/article/usecases/delete-article.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { ArticleIdDto } from '../dtos/articleId.dto';

@Injectable()
export class DeleteArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(articleIdDto: ArticleIdDto): Promise<void> {
    await this.articleRepository.deleteArticle(articleIdDto.article_id);
  }
}
