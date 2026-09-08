export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUser = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "image" | "role"
>;

export type UpdateUser = Partial<CreateUser> & {
  role?: string;
};

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
