import {vi} from "vitest";

export const mockUserRepository = {
    save: vi.fn(),
    findById: vi.fn(),
    findByAuthId: vi.fn(),
    findByEmail: vi.fn()
};
