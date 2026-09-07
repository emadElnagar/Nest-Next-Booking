import { api } from "./api";
import { CreateRoom } from "@/types/rooms";

export const roomsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new room
    createRoom: builder.mutation({
      query: (room: CreateRoom) => ({
        url: "/rooms",
        method: "POST",
        body: room,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateRoomMutation } = roomsApi;
