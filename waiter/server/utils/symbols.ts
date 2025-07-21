import type {ServiceIdentifier} from 'inversify';
import type {UserRepository} from "@server/applications/user/ports/out";
import type {UserCreate, UserQuery} from "@server/applications/user/ports/in";

// Define symbols for dependency injection
export const userCreateKey: ServiceIdentifier<UserCreate> = Symbol.for('__UserCreate__');
export const userQueryKey: ServiceIdentifier<UserQuery> = Symbol.for('__UserQuery__');
export const userRepositoryKey: ServiceIdentifier<UserRepository> = Symbol.for('__UserRepository__');