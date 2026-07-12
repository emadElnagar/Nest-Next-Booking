import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query({
      query: () => "/users",
    }),

    // Get a single user by ID
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),

    // Get a single user by email
    getUserByEmail: builder.query({
      query: (email) => `/users/email/${email}`,
    }),
  }),
  overrideExisting: false,
});
