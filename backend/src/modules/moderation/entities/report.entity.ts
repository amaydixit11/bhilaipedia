import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  report_id: string;

  @Column()
  resource: 'article' | 'comment'; // Enum to indicate type of resource

  @Column()
  resource_id: string; // ID of the article or comment

  @Column()
  reported_by: string;

  @Column({ type: 'text' })
  reason: string;

  @Column({ default: 'open' }) // 'open', 'resolved', 'dismissed'
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  resolved_by: string;

  @Column({ nullable: true })
  resolved_at: Date;
}
