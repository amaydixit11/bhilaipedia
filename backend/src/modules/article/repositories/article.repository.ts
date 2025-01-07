// src/modules/article/repositories/article.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async createArticle(article: Partial<Article>): Promise<Article> {
    const newArticle = this.articleRepository.create(article);
    return this.articleRepository.save(newArticle);
  }

  async updateArticle(articleId: string, updates: Partial<Article>): Promise<Article> {
    await this.articleRepository.update({ article_id: articleId }, updates);
    return this.articleRepository.findOne({ where: { article_id: articleId } });
  }

  async findById(articleId: string): Promise<Article> {
    return this.articleRepository.findOne({ where: { article_id: articleId } });
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async deleteArticle(articleId: string): Promise<void> {
    await this.articleRepository.delete({ article_id: articleId });
  }
}
