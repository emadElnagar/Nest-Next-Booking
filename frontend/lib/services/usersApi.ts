import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new user
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

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

    // Update a user
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: user,
      }),
    }),
  }),
  overrideExisting: false,
});
