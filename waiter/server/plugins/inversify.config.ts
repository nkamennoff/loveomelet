import "reflect-metadata";
import { Container } from 'inversify';
import { defineNitroPlugin } from '#imports';
import {UserService} from "../applications/user/services/user.service";
import type {UserCreate, UserQuery} from "../applications/user/ports/in";
import type { UserRepository } from "../applications/user/ports/out";
import {UserInMemoryRepository} from "../adapters/user-in-memory-repository";
import {userRepositoryKey, userCreateKey, userQueryKey, gameRepositoryKey, gameCreateKey} from "../utils/symbols";
import {GameService} from "../applications/game/services/game.service";
import type {GameCreate} from "../applications/game/ports/in";
import type {GameRepository} from "../applications/game/ports/out";
import {GameInMemoryRepository} from "../adapters/game-in-memory-repository/game-in-memory.repository";

declare module 'nitropack' {
    interface NitroApp {
        $container: Container;
    }
}

export default defineNitroPlugin((nitroApp) => {
    const container = new Container();

    // out
    container.bind<UserRepository>(userRepositoryKey).to(UserInMemoryRepository);
    container.bind<GameRepository>(gameRepositoryKey).to(GameInMemoryRepository);

    // in
    container.bind<UserCreate>(userCreateKey).to(UserService);
    container.bind<UserQuery>(userQueryKey).to(UserService);
    container.bind<GameCreate>(gameCreateKey).to(GameService);

    nitroApp.$container = container;
});