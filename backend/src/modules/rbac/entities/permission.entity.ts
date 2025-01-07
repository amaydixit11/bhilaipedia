import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  permission_id: string;

  @Column()
  action: string; // E.g., 'create', 'edit', 'delete'

  @Column()
  resource: string; // E.g., 'article', 'user'
}
