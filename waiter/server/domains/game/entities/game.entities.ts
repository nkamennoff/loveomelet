import { z } from 'zod';

export const gameId = z.string().regex(/^game_.+$/);
export const gameTypes = z.enum(['lovingChefs', 'cookAndCritic'] as const);
export const game = z.object({
    id: gameId,
    type: gameTypes,
    userIds: z.array(z.string().regex(/^user_.+$/)),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const gameCreateRequest = z.object({
    type: gameTypes,
    userId: z.string().regex(/^user_.+$/),
});

export type GameId = z.infer<typeof gameId>;
export type GameType = z.infer<typeof gameTypes>;
export type Game = z.infer<typeof game>;
export type GameCreateRequest = z.infer<typeof gameCreateRequest>;

export type GameParsingError = {
    message: string;
    details?: string;
}

export type GameCreationError = GameParsingError;