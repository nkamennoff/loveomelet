import {inject, injectable} from "inversify";
import { game, type GameCreationError, type GameParsingError, type GameCreateRequest, type Game } from "../../../domains/game/entities";
import type {GameCreate} from "../ports/in";
import type {GameRepository} from "../ports/out";
import {gameRepositoryKey} from "../../../utils/symbols";
import {type Either, right, left} from "fp-ts/es6/Either";
import type {SafeParseReturnType} from "zod";

@injectable()
export class GameService implements GameCreate {

    private readonly gameRepository: GameRepository;

    constructor(@inject(gameRepositoryKey) gameRepository: GameRepository) {
        this.gameRepository = gameRepository;
    }

    async create(request: GameCreateRequest): Promise<Either<GameCreationError, Game>> {
        const now = new Date();

        const toCreate: SafeParseReturnType<unknown, Game> = game.safeParse({
            id: `game_${crypto.randomUUID()}`,
            type: request.type,
            userIds: [ request.userId ],
            createdAt: now,
            updatedAt: now
        });

        if (!toCreate.success) {
            const error: GameParsingError = { message: 'Failed to create game', details: `validation error: ${toCreate.error.message}` };
            return Promise.resolve(left(error));
        }

        const created = await this.gameRepository.create(toCreate.data);
        return Promise.resolve(right(created));
    }
}