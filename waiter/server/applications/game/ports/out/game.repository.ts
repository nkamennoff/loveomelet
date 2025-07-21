import type {Game} from "@server/domains/game/entities";

export interface GameRepository {
    create(request: Game): Promise<Game>;
}