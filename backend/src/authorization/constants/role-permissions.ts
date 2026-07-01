import { UserRole } from '../../users/enums/user.enums';
import { Permissions } from '../enums/permission.enum';

export const rolePermissions: Record<UserRole, Permissions[]> = {
  // Admin permissions
  [UserRole.ADMIN]: [
    Permissions.CREATE_ROOM,
    Permissions.UPDATE_ROOM,
    Permissions.DELETE_ROOM,
    Permissions.VIEW_ROOM,
    Permissions.MARK_ROOM_AS_AVAILABLE,
    Permissions.MARK_ROOM_AS_UNAVAILABLE,
    Permissions.ASSIGN_ROLE,
    Permissions.CREATE_USER,
    Permissions.UPDATE_USER,
    Permissions.DELETE_USER,
    Permissions.VIEW_USER,
    Permissions.BLOCK_USER,
    Permissions.CREATE_BOOKING,
    Permissions.UPDATE_BOOKING,
    Permissions.DELETE_BOOKING,
    Permissions.VIEW_BOOKING,
    Permissions.CREATE_REVIEW,
    Permissions.UPDATE_REVIEW,
    Permissions.DELETE_REVIEW,
  ],
  // Moderator permissions
  [UserRole.MODERATOR]: [
    Permissions.CREATE_ROOM,
    Permissions.UPDATE_ROOM,
    Permissions.DELETE_ROOM,
    Permissions.VIEW_ROOM,
    Permissions.MARK_ROOM_AS_AVAILABLE,
    Permissions.MARK_ROOM_AS_UNAVAILABLE,
    Permissions.VIEW_USER,
    Permissions.BLOCK_USER,
    Permissions.CREATE_BOOKING,
    Permissions.UPDATE_BOOKING,
    Permissions.DELETE_BOOKING,
    Permissions.VIEW_BOOKING,
    Permissions.CREATE_REVIEW,
    Permissions.UPDATE_REVIEW,
    Permissions.DELETE_REVIEW,
  ],
  // User permissions
  [UserRole.USER]: [
    Permissions.VIEW_ROOM,
    Permissions.CREATE_BOOKING,
    Permissions.UPDATE_BOOKING,
    Permissions.DELETE_BOOKING,
    Permissions.VIEW_BOOKING,
    Permissions.CREATE_REVIEW,
    Permissions.UPDATE_REVIEW,
    Permissions.DELETE_REVIEW,
  ],
};
