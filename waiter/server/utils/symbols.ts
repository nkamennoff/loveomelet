import type {ServiceIdentifier} from 'inversify';
import type {UserRepository} from "@server/applications/user/ports/out";
import type {UserCreate, UserQuery} from "@server/applications/user/ports/in";
import type {GameCreate} from "@server/applications/game/ports/in";
import type {GameRepository} from "@server/applications/game/ports/out";

// Define symbols for dependency injection
export const userCreateKey: ServiceIdentifier<UserCreate> = Symbol.for('__UserCreate__');
export const userQueryKey: ServiceIdentifier<UserQuery> = Symbol.for('__UserQuery__');
export const userRepositoryKey: ServiceIdentifier<UserRepository> = Symbol.for('__UserRepository__');

export const gameCreateKey: ServiceIdentifier<GameCreate> = Symbol.for('__GameCreate__');
export const gameRepositoryKey: ServiceIdentifier<GameRepository> = Symbol.for('__GameRepository__');