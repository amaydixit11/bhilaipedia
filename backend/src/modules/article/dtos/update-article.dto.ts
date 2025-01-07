// src/modules/article/dtos/update-article.dto.ts
import { IsString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ArticleStatus } from '../entities/article.entity';

export class UpdateArticleDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsEnum(ArticleStatus)
  @IsOptional()
  status?: ArticleStatus;

  @IsUUID()
  @IsOptional()
  category_id?: string;
}
