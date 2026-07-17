export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string | null;
  role?: string;
}

export interface UpdateUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  image?: string | null;
  role?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
