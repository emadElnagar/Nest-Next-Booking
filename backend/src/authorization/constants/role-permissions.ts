import { UserRole } from '../../users/enums/user.enums';
import { Permission } from '../enums/permission.enum';

export const rolePermissions: Record<UserRole, Permission[]> = {
  // Admin permissions
  [UserRole.ADMIN]: [
    Permission.CREATE_ROOM,
    Permission.UPDATE_ROOM,
    Permission.DELETE_ROOM,
    Permission.VIEW_ROOM,
    Permission.MARK_ROOM_AS_AVAILABLE,
    Permission.MARK_ROOM_AS_UNAVAILABLE,
    Permission.ASSIGN_ROLE,
    Permission.CREATE_USER,
    Permission.UPDATE_USER,
    Permission.DELETE_USER,
    Permission.VIEW_USER,
    Permission.BLOCK_USER,
    Permission.CREATE_BOOKING,
    Permission.UPDATE_BOOKING,
    Permission.DELETE_BOOKING,
    Permission.VIEW_BOOKING,
    Permission.CREATE_REVIEW,
    Permission.UPDATE_REVIEW,
    Permission.DELETE_REVIEW,
  ],
  // Moderator permissions
  [UserRole.MODERATOR]: [
    Permission.CREATE_ROOM,
    Permission.UPDATE_ROOM,
    Permission.DELETE_ROOM,
    Permission.VIEW_ROOM,
    Permission.MARK_ROOM_AS_AVAILABLE,
    Permission.MARK_ROOM_AS_UNAVAILABLE,
    Permission.VIEW_USER,
    Permission.BLOCK_USER,
    Permission.CREATE_BOOKING,
    Permission.UPDATE_BOOKING,
    Permission.DELETE_BOOKING,
    Permission.VIEW_BOOKING,
    Permission.CREATE_REVIEW,
    Permission.UPDATE_REVIEW,
    Permission.DELETE_REVIEW,
  ],
  // User permissions
  [UserRole.USER]: [
    Permission.VIEW_ROOM,
    Permission.CREATE_BOOKING,
    Permission.UPDATE_BOOKING,
    Permission.DELETE_BOOKING,
    Permission.VIEW_BOOKING,
    Permission.CREATE_REVIEW,
    Permission.UPDATE_REVIEW,
    Permission.DELETE_REVIEW,
  ],
};
