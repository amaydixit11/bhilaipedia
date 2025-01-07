// src/modules/article/usecases/publish-draft.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { ArticleStatus } from '../entities/article.entity';
import { ArticleIdDto } from '../dtos/articleId.dto';

@Injectable()
export class PublishDraftUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(articleIdDto: ArticleIdDto): Promise<void> {
    await this.articleRepository.updateArticle(articleIdDto.article_id, {
      status: ArticleStatus.PUBLISHED,
      published_at: new Date(),
    });
  }
}
