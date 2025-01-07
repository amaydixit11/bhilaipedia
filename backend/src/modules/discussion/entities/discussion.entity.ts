import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn('uuid')
  discussion_id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  linked_article_id: string;

  @Column({ nullable: true })
  linked_category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: false })
  is_locked: boolean;
}
