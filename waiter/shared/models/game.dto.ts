import type {GameId, GameType} from "@server/domains/game/entities";

export type GameDto = {
    id: GameId;
    type: GameType;
    createdAt: Date;
};