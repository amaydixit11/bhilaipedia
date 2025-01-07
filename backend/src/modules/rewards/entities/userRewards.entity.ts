import { User } from 'src/modules/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Badge } from './badges.entity';

@Entity()
export class UserReward {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.user_id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Badge, (badge) => badge.badge_id)
  @JoinColumn({ name: 'badge_id' })
  badge: Badge;

  @Column({ default: 0 })
  points_scored: number;

  @Column({ default: 0 })
  streak: number;
}
