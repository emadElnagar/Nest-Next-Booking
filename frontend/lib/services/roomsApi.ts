import { api } from "./api";
import { CreateRoom, Room, UpdateRoom } from "@/types/rooms";

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

    // Update a room
    updateRoom: builder.mutation({
      query: ({ id, updateRoom }: { id: string; updateRoom: UpdateRoom }) => ({
        url: `/rooms/${id}`,
        method: "PATCH",
        body: updateRoom,
      }),
    }),

    // Delete a room
    deleteRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateRoomMutation,
  useGetAllRoomsQuery,
  useGetRoomQuery,
  useUpdateRoomMutation,
} = roomsApi;
