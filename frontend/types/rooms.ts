export interface Room {
  id: string;
  number: string;
  description: string;
  capacity: number;
  adults: number;
  children: number;
  pricePerNight: number;
  createdAt: Date;
  updatedAt: Date;
}
