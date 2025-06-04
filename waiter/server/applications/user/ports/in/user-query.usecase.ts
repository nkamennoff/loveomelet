import type { UserId, User } from '@server/domains/user/entities';
import type { Option } from 'fp-ts/es6/Option';

export interface UserQuery {
    findById(id: UserId): Promise<Option<User>>;
    findByAuthId(authId: string): Promise<Option<User>>;
    findByEmail(email: string): Promise<Option<User>>;
}