import { api } from "./api";
import { CreateRoom, Room } from "@/types/rooms";

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

    // Get all rooms
    getAllRooms: builder.query<Room[], void>({
      query: () => "/rooms",
    }),

    // Get a single room
    getRoom: builder.query<Room, string>({
      query: (id) => `/rooms/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useCreateRoomMutation, useGetAllRoomsQuery, useGetRoomQuery } =
  roomsApi;
