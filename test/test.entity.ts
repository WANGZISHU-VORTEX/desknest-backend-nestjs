// test/test.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test_table')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
