// src/modules/article/presenters/article.presenter.ts
import { Article } from '../entities/article.entity';

export class ArticlePresenter {
  static present(article: Article) {
    return {
      article_id: article.article_id,
      title: article.title,
      content: article.content,
      status: article.status,
      author_id: article.author_id,
      category_id: article.category_id,
      created_at: article.created_at,
      updated_at: article.updated_at,
      published_at: article.published_at,
    };
  }
}
