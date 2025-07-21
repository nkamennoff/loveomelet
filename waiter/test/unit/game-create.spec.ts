import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import type { GameRepository } from "../../server/applications/game/ports/out";
import type { GameCreate } from "../../server/applications/game/ports/in";
import { GameService } from "../../server/applications/game/services/game.service";
import { mockGameRepository } from "./mocks/game-repository.mock";
import type {Game, GameCreateRequest, GameCreationError} from "../../server/domains/game/entities";
import {type Right, isRight, type Either} from "fp-ts/es6/Either";

const gameService: GameCreate = new GameService(mockGameRepository as GameRepository);
const now = new Date('2022-04-04T12:58:00Z');

describe('Game Creation', () => {
    afterEach(() => {
        // Reset all mocks before each test
        vi.resetAllMocks();
    });

    describe('given a user not involved in a game', () => {
        let gameCreateRequest: GameCreateRequest;

        beforeEach(() => {
            vi.setSystemTime(now);
            gameCreateRequest = {
                type: "lovingChefs",
                userId: "user_123456789"
            };

            mockGameRepository.create.mockImplementationOnce((request) => Promise.resolve(request));
        });

        it('should create a game successfully', async () => {
            // Act
            const result: Either<GameCreationError, Game> = await gameService.create(gameCreateRequest);
            // Assert
            expect(mockGameRepository.create).toHaveBeenCalledTimes(1);

            expect(isRight(result)).toBeTruthy();
            const createdGame: Game = (result as Right<Game>).right;
            expect(createdGame).toEqual(expect.objectContaining({
                id: expect.stringMatching(/^game_/),
                type: gameCreateRequest.type,
                userIds: [gameCreateRequest.userId],
                createdAt: expect.any(Date),
                updatedAt: expect.any(Date) })
            );
        });
    });
});