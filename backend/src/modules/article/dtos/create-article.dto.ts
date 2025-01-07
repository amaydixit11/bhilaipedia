// src/modules/article/dtos/create-article.dto.ts
import { IsString, IsEnum, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { ArticleStatus } from '../entities/article.entity';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(ArticleStatus)
  status: ArticleStatus;

  @IsUUID()
  author_id: string;

  @IsUUID()
  @IsOptional()
  category_id?: string;
}
