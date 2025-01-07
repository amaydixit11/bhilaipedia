import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class UserActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  resource: 'article' | 'comment'; // Enum to indicate type of resource

  @Column()
  resource_id: string; // ID of the article or comment

  @Column()
  activity_type: string;

  @CreateDateColumn()
  activity_timestamp: Date;
}
