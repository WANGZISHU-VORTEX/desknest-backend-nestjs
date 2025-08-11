import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, comment: 'User ID' })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    comment: 'User Name',
    nullable: false,
  })
  username: string;

  @Column({
    type: 'char',
    length: 60,
    comment: 'Password Hash',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
    comment: 'User Role',
  })
  role?: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Creation Timestamp',
  })
  createAt?: Date;
}
