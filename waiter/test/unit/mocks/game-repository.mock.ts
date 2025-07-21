import {vi} from "vitest";

export const mockGameRepository = {
    create: vi.fn(),
    findById: vi.fn(),
    findByUserId: vi.fn(),
};
