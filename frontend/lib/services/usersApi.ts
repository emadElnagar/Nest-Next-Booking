import { CreateUser, UpdateUser, User } from "@/types/user";
import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new user
    createUser: builder.mutation({
      query: (user: CreateUser) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

    // Get all users
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    // Get a single user by ID
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),

    // Get a single user by email
    getUserByEmail: builder.query<User, string>({
      query: (email) => `/users/email/${email}`,
    }),

    // Update a user
    updateUser: builder.mutation({
      query: ({ id, updateUser }: { id: string; updateUser: UpdateUser }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: updateUser,
      }),
    }),

    // Delete user
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
