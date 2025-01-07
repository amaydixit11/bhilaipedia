import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class UserActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  content_id: string;

  @Column()
  activity_type: string;

  @CreateDateColumn()
  activity_timestamp: Date;
}
