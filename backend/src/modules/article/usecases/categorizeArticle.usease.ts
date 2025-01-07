// src/modules/article/usecases/categorize-article.usecase.ts
import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article.repository';
import { CategorizeArticleDto } from '../dtos/categorizeArticle.dto';


@Injectable()
export class CategorizeArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(categorizeArticleDto: CategorizeArticleDto): Promise<void> {
    await this.articleRepository.updateArticle(categorizeArticleDto.article_id, {
      category_id: categorizeArticleDto.category_id,
    });
  }
}
