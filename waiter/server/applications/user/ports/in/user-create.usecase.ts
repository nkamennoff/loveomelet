import type {User, UserCreateRequest} from "@server/domains/user/entities";

export interface UserCreate {
    createUser(request: UserCreateRequest): Promise<User>;
}