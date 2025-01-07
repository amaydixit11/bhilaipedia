import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Badge {
  @PrimaryGeneratedColumn('uuid')
  badge_id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  criteria_type: string; // Enum-like, e.g., 'points', 'activity', 'streak'

  @Column()
  criteria_value: number;

  @Column({ nullable: true })
  icon_url: string;
}
