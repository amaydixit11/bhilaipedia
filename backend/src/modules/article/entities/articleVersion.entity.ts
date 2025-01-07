import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ArticleVersion {
  @PrimaryGeneratedColumn('uuid')
  version_id: string;

  @Column()
  article_id: string;

  @Column({ type: 'text' })
  content_delta: string;

  @Column()
  version_number: number;

  @Column()
  git_url: string;

  @Column()
  created_by: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  reason_for_update: string;
}
