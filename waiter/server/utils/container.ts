import type {Container, ServiceIdentifier} from 'inversify';
import { useNitroApp } from 'nitropack/runtime';
import type {UserRepository} from "@server/applications/user/ports/out";
import type {UserCreate, UserQuery} from "@server/applications/user/ports/in";

export const userCreateKey: ServiceIdentifier<UserCreate> = Symbol.for('__UserCreate__');
export const userQueryKey: ServiceIdentifier<UserQuery> = Symbol.for('__UserQuery__');
export const userRepositoryKey: ServiceIdentifier<UserRepository> = Symbol.for('__UserRepository__');

export function useContainer(): Container {
    const nitroApp = useNitroApp();

    if (!nitroApp.$container) {
        throw new Error('Inversify container not initialized');
    }

    return nitroApp.$container;
}