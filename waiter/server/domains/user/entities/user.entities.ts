export type UserId = `user_${string}`;

export type User = {
    id: UserId,
    authId: string,
    name: string,
    email: string,
}

export type UserCreateRequest = Omit<User, 'id'>;