import { type Option, none, some } from 'fp-ts/es6/Option';
import type { Game } from "../../domains/game/entities";
import type { GameRepository } from "../../applications/game/port/out";

export class GameInMemoryRepository implements GameRepository {
    private games: Game[] = [];

    async create(game: Game): Promise<Game> {
        this.games.push(game);
        return game;
    }

    async findById(id: string): Promise<Option<Game>> {
        return this.games.reduce((acc: Option<Game>, game: Game) => {
            if (game.id === id) {
                return some(game);
            }
            return acc;
        }, none);
    }

    async findByUserId(userId: string): Promise<Game[]> {
        return Array.from(this.games.values()).filter(game => game.userIds.includes(userId));
    }
}