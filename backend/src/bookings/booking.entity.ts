import { Room } from 'src/rooms/room.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Room, (room) => room.bookings)
  room: Room;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @Column()
  checkIn: Date;

  @Column()
  checkOut: Date;

  @Column()
  adults: number;

  @Column()
  children: number;

  @Column('decimal', { precision: 7, scale: 2 })
  totalPrice: number;

  @Column({
    default: 'pending',
  })
  status: string;

  @Column()
  paymentMethod: string;

  @Column({ default: false })
  isPaid: boolean;

  @Column({ default: null, nullable: true })
  paidAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
