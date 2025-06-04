import { none, some, type Option } from "fp-ts/es6/Option";
import type {UserId, User} from "../../domains/user/entities";
import type {UserRepository} from "../../applications/user/ports/out";

export class UserInMemoryRepository implements UserRepository {
    private users: User[] = [];

    async save(user: User): Promise<User> {
        console.log(`Saving user | userId = ${user.id} | data = ${JSON.stringify(user)}`);

        const existing: Option<User> = await this.findById(user.id);
        if (existing) {
            const index = this.users.findIndex(u => u.id === user.id);
            this.users.splice(index, 1);
        }

        this.users.push(user);
        return Promise.resolve(user);
    }

    async findById(id: UserId): Promise<Option<User>> {
        const result: Option<User> = this.users.reduce((acc: Option<User>, user: User) => {
            return (user.id === id) ? some(user): acc
        }, none);

        return Promise.resolve(result);
    }

    async findByAuthId(authId: string): Promise<Option<User>> {
        const result: Option<User> = this.users.reduce((acc: Option<User>, user: User) => {
            return (user.authId === authId) ? some(user): acc;
        }, none);

        return Promise.resolve(result);
    }

    async findByEmail(email: string): Promise<Option<User>> {
        const result: Option<User> = this.users.reduce((acc: Option<User>, user: User) => {
            return (user.email === email) ? some(user): acc;
        }, none);

        return Promise.resolve(result);
    }
}