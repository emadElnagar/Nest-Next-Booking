import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Check,
} from 'typeorm';
import { RoomType } from '../room-type/room-type.entity';

export enum RoomStatus {
  AVAILABLE = 'available',
  MAINTENANCE = 'maintenance',
  INACTIVE = 'inactive',
}

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, type: 'int', nullable: false })
  @Check('"roomNumber" > 0')
  roomNumber: number;

  @ManyToOne(() => RoomType, (roomType) => roomType.rooms, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'roomTypeId' })
  roomType: RoomType;

  @Column({ type: 'uuid' })
  roomTypeId: string;

  @Column({
    type: 'enum',
    enum: RoomStatus,
    default: RoomStatus.AVAILABLE,
  })
  status: RoomStatus;
}
