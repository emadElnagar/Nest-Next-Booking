import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

class TokenStorage {
  private accessToken: string | null = null;

  get() {
    return this.accessToken;
  }

  set(token: string) {
    this.accessToken = token;
  }

  clear() {
    this.accessToken = null;
  }

  isAuthenticated() {
    return !!this.accessToken;
  }
}

const tokenStorage = new TokenStorage();
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",

  prepareHeaders: (headers) => {
    const token = tokenStorage.get();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            url: "/auth/refresh",
            method: "POST",
          },
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          const { accessToken } = refreshResult.data as {
            accessToken: string;
          };

          tokenStorage.set(accessToken);

          result = await baseQuery(args, api, extraOptions);
        } else {
          tokenStorage.clear();
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
