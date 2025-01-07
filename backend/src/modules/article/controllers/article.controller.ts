// src/modules/article/controllers/article.controller.ts
import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Param, 
  Put, 
  Delete, 
} from '@nestjs/common';

import { ArticleService } from '../services/article.service';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';
import { ArticlePresenter } from '../presenters/article.presenter';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // POST endpoint for creating an article
  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    const article = await this.articleService.createArticle(createArticleDto);
    return ArticlePresenter.present(article); // Format the response with the presenter
  }

  // PUT endpoint for updating an article
  @Put(':articleId')
  async updateArticle(
    @Param('articleId') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    const updatedArticle = await this.articleService.updateArticle(
      articleId,
      updateArticleDto,
    );
    return ArticlePresenter.present(updatedArticle); // Format the response with the presenter
  }

  // GET endpoint for retrieving an article by ID
  @Get(':articleId')
  async getArticle(@Param('articleId') articleId: string) {
    const article = await this.articleService.getArticle(articleId);
    return ArticlePresenter.present(article); // Format the response with the presenter
  }

  // GET endpoint for retrieving all articles
  @Get()
  async getAllArticles() {
    const articles = await this.articleService.getAllArticles();
    return articles.map(ArticlePresenter.present); // Format each article with the presenter
  }

  // DELETE endpoint for deleting an article
  @Delete(':articleId')
  async deleteArticle(@Param('articleId') articleId: string) {
    await this.articleService.deleteArticle(articleId);
    return { message: 'Article deleted successfully' };
  }

  // PUT endpoint for saving a draft
  @Put(':articleId/draft')
  async saveDraft(
    @Param('articleId') articleId: string,
    @Body('content') content: string,
  ) {
    await this.articleService.saveDraft(articleId, content);
    return { message: 'Draft saved successfully' };
  }

  // PUT endpoint for publishing a draft
  @Put(':articleId/publish')
  async publishDraft(@Param('articleId') articleId: string) {
    await this.articleService.publishDraft(articleId);
    return { message: 'Draft published successfully' };
  }
}
