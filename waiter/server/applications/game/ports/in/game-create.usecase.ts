import type { Game, GameCreateRequest } from '@server/domains/game/entities';

export interface GameCreate {
    create(request: GameCreateRequest): Promise<Game>;
}