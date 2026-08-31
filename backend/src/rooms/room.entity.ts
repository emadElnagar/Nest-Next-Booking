import { Booking } from 'src/bookings/booking.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { RoomType } from './enums/room.enums';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  roomNumber: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  images: string[];

  @Column('simple-array')
  amenities: string[];

  @Column({ type: 'enum', enum: RoomType })
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

  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
