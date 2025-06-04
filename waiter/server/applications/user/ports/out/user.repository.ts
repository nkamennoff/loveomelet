import type {User} from "../../../../domains/user/entities";
import { type Option } from 'fp-ts/es6/Option';

export interface UserRepository {
    save(user: User): Promise<User>;

    findById(id: string): Promise<Option<User>>;
    findByAuthId(authId: string): Promise<Option<User>>;
    findByEmail(email: string): Promise<Option<User>>;
}