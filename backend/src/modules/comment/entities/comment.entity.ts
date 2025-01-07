import { Discussion } from 'src/modules/discussion/entities/discussion.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @ManyToOne(() => Discussion, (discussion) => discussion.discussion_id)
  discussion: Discussion;

  @Column({ nullable: true })
  parent_comment_id: string; // Allows replies to comments

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, (user) => user.user_id)
  created_by: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: false })
  is_deleted: boolean;

  @Column({ default: false })
  is_edited: boolean;

  @Column({ default: 0 })
  upvotes_count: number;

  @Column({ default: 0 })
  downvotes_count: number;
}
