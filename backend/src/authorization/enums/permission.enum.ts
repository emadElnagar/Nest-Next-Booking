export enum Permission {
  // Rooms
  CREATE_ROOM = 'create_room',
  UPDATE_ROOM = 'update_room',
  DELETE_ROOM = 'delete_room',
  VIEW_ROOM = 'view_room',
  // Room Availability
  MARK_ROOM_AS_AVAILABLE = 'mark_room_as_available',
  MARK_ROOM_AS_UNAVAILABLE = 'mark_room_as_unavailable',
  // Roles
  ASSIGN_ROLE = 'assign_role',
  // Users
  CREATE_USER = 'create_user',
  UPDATE_USER = 'update_user',
  DELETE_USER = 'delete_user',
  VIEW_USER = 'view_user',
  BLOCK_USER = 'block_user',
  // Bookings
  CREATE_BOOKING = 'create_booking',
  UPDATE_BOOKING = 'update_booking',
  DELETE_BOOKING = 'delete_booking',
  VIEW_BOOKING = 'view_booking',
  // Reviews
  CREATE_REVIEW = 'create_review',
  UPDATE_REVIEW = 'update_review',
  DELETE_REVIEW = 'delete_review',
}
