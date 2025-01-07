// src/modules/article/usecases/save-draft.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { UpdateArticleDto } from '../dtos/update-article.dto';
import { ArticleStatus } from '../entities/article.entity';

@Injectable()
export class SaveDraftUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(articleId: string, content: string): Promise<void> {
    const updateArticleDto: UpdateArticleDto = {
      content,
      status: ArticleStatus.DRAFT,
    };
    await this.articleRepository.updateArticle(articleId, updateArticleDto);
  }
}
