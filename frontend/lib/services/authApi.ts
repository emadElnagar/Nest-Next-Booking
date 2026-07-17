import { api } from "./api";
import { UserRegister } from "../../types/user";

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
      query: (credentials: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
