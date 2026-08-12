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
      invalidatesTags: ["Auth"],
    }),

    // User login
    loginUser: builder.mutation({
      query: (user: UserLogin) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),

    // Get current user
    getCurrentUser: builder.query<User, void>({
      query: () => "/auth/me",
      providesTags: ["Auth"],
    }),

    // Refresh token
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),

    // Logout user
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useRefreshTokenMutation,
  useLogoutUserMutation,
} = usersApi;
