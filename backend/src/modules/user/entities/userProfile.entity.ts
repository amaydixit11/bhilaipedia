import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: true })
  profile_url: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date;

  @Column({ nullable: true })
  provider: string;

  @Column({ type: 'json', nullable: true })
  social_links: string[];
}
