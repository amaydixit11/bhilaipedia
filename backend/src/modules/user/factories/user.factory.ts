// src/modules/article/factories/article.factory.ts
import { CreateArticleDto } from '../dtos/create-article.dto';
import { ArticleStatus } from '../entities/article.entity';
import { Article } from '../entities/article.entity';

export class ArticleFactory {
  static createArticle(createArticleDto: CreateArticleDto): Article {
    const article = new Article();
    article.title = createArticleDto.title;
    article.content = createArticleDto.content;
    article.status = createArticleDto.status || ArticleStatus.DRAFT;
    article.author_id = createArticleDto.author_id;
    article.category_id = createArticleDto.category_id;
    return article;
  }
}
