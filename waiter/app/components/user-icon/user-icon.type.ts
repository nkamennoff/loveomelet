import type { User } from '@server/domains/user/entities';

export type UserIconProps = {
    user: User
};

export const userIconActionList = ["dashboard", "profile", "logout"] as const;
export type UserIconActions = typeof userIconActionList[number];

export type UserIconEmits = {
    select: [action: UserIconActions]
};
