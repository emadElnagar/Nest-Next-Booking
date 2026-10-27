import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Room } from '../rooms/room.entity';

@Entity('room_types')
export class RoomType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ length: 50 })
  bedType: string;

  @Column({ type: 'int' })
  capacity: number;

  @Column({ type: 'int', default: 0 })
  maxChildren: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basePrice: string;

  @Column({ type: 'simple-array', nullable: true })
  amenities: string[] | null;

  @OneToMany(() => Room, (room) => room.roomType)
  rooms: Room[];
}
