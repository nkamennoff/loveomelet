import type { User, UserCreateRequest } from '@server/domains/user/entities';
import type { UserRepository } from '../ports/out';
import type { UserQuery, UserCreate } from '../ports/in';
import type { Option } from "fp-ts/es6/Option";
import { inject, injectable } from "inversify";
import { userRepositoryKey } from "../../../utils/symbols";

@injectable()
export class UserService implements UserCreate, UserQuery {

    constructor(@inject(userRepositoryKey) private repository: UserRepository) {}

    async createUser(request: UserCreateRequest): Promise<User> {
        return this.repository.save({
            id: `user_${crypto.randomUUID()}`,
            ...request
        })
    }

    async findById(id: string): Promise<Option<User>> {
        return this.repository.findById(id);
    }

    async findByAuthId(authId: string): Promise<Option<User>> {
        return this.repository.findByAuthId(authId);
    }

    async findByEmail(email: string): Promise<Option<User>> {
        return await this.repository.findByEmail(email);
    }
}