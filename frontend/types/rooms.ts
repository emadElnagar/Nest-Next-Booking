export interface Room {
  id: string;
  roomNumber: string;
  description: string;
  images: string[];
  amenities: string[];
  type: string;
  isAvailable: boolean;
  capacity: number;
  adults: number;
  children: number;
  pricePerNight: number;
  bookings: object[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateRoom {
  roomNumber: string;
  description: string;
  images: string[];
  amenities: string[];
  type: string;
  isAvailable: boolean;
  capacity: number;
  adults: number;
  children: number;
  pricePerNight: number;
}

export interface UpdateRoom {
  roomNumber: string;
  description: string;
  images: string[];
  amenities: string[];
  type: string;
  isAvailable: boolean;
  capacity: number;
  adults: number;
  children: number;
  pricePerNight: number;
}
