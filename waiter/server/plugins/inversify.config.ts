import "reflect-metadata";
import { Container } from 'inversify';
import { defineNitroPlugin } from '#imports';
import {UserService} from "../applications/user/services/user.service";
import type {UserCreate, UserQuery} from "../applications/user/ports/in";
import type { UserRepository } from "../applications/user/ports/out";
import {UserInMemoryRepository} from "../adapters/user-in-memory-repository";
import { userRepositoryKey, userCreateKey, userQueryKey } from "../utils/symbols";

declare module 'nitropack' {
    interface NitroApp {
        $container: Container;
    }
}

export default defineNitroPlugin((nitroApp) => {
    const container = new Container();

    // out
    container.bind<UserRepository>(userRepositoryKey).to(UserInMemoryRepository);

    // in
    container.bind<UserCreate>(userCreateKey).to(UserService);
    container.bind<UserQuery>(userQueryKey).to(UserService);

    nitroApp.$container = container;
});