import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  roomNumber: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  images: string[];

  @Column()
  type: string;

  @Column()
  capacity: number;

  @Column()
  adults: number;

  @Column({ default: 0 })
  children: number;

  @Column('decimal', { precision: 7, scale: 2 })
  pricePerNight: number;

  @Column({ default: true })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
