import type {H3Event} from "h3";
import type {GameDto} from "@shared/models/game.dto";
import {gameCreateRequest} from "@server/domains/game/entities";

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event);

    const request = gameCreateRequest.safeParse(body);

    if (!request.success) {
        setResponseStatus(event, 400);
        return { error: 'Invalid request body', details: request.error.message };
    }

    const container = useContainer();
    const gameCreate = container.get(gameCreateKey);

    const game = await gameCreate.create(request.data);

    const gameDto: GameDto = {
        id: game.id,
        type: game.type,
        createdAt: game.createdAt
    };

    return gameDto;
});