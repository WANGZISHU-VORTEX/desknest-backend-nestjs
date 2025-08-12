import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {DeskEntity} from '../desk/desk.entity';

@Entity('areas')
export class AreaEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: '区域ID' })
  id: number;

  @Column({ type: 'varchar', length: 100, comment: '区域名' })
  name: string;

  @Column({ type: 'varchar', length: 255, comment: '详细地址' })
  address: string;

  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    comment: '地理坐标',
  })
  location: { type: 'Point'; coordinates: [number, number] }; // [经度, 纬度]

  @Column({ type: 'jsonb', comment: '营业时间' })
  openingHours: Record<string, string>; // 例如: { "mon": "09:00-22:00", ... }

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '每小时价格' })
  pricePerHour: number;

  @Column({ type: 'int', comment: '容纳人数' })
  capacity: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', comment: '创建时间' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', comment: '更新时间' })
  updatedAt: Date;

  @OneToMany(() => DeskEntity, (desk) => desk.area)
  desks: DeskEntity[];
}