import {describe, it, expect, beforeEach, vi, afterEach} from "vitest";
import { UserService } from "../../server/applications/user/services/user.service";
import type { User, UserCreateRequest } from "../../server/domains/user/entities";
import { mockUserRepository } from "./mocks/user-repository.mock";
import type { UserRepository } from "../../server/applications/user/ports/out";

const userService = new UserService(mockUserRepository as UserRepository);

describe('User Creation', () => {
    afterEach(() => {
        // Reset all mocks before each test
        vi.resetAllMocks();
    });

    describe('given a valid user creation request', () => {
        it('should create a user successfully', async () => {
            // Arrange
            const userCreateRequest: UserCreateRequest = {
                authId: "auth0|123456789",
                name: "Test User",
                email: "test@example.com"
            };

            mockUserRepository.save.mockImplementation((toSave) => Promise.resolve(toSave));

            // Act
            const result: User = await userService.createUser(userCreateRequest);

            // Assert
            expect(mockUserRepository.save).toHaveBeenCalledTimes(1);
            expect(mockUserRepository.save).toHaveBeenCalledWith(expect.objectContaining({
                id: expect.stringMatching(/^user_/),
                authId: userCreateRequest.authId,
                name: userCreateRequest.name,
                email: userCreateRequest.email
            }));
            
            expect(result).toEqual(expect.objectContaining({
                id: expect.stringMatching(/^user_/),
                authId: userCreateRequest.authId,
                name: userCreateRequest.name,
                email: userCreateRequest.email
            }));
        });
    });
});