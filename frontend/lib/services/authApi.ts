import { api } from "./api";
import { User, UserLogin, UserRegister } from "@/types/user";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // User registration
    registerUser: builder.mutation({
      query: (user: UserRegister) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),

    // User login
    loginUser: builder.mutation({
      query: (user: UserLogin) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    // Get current user
    getCurrentUser: builder.query<User, void>({
      query: () => "/auth/me",
    }),
  }),
});
