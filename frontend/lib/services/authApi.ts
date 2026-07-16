import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // User registration
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});
