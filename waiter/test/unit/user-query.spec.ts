import {expect, it, describe, afterEach, vi} from "vitest";
import type {User} from "../../server/domains/user/entities";
import {mockUserRepository} from "./mocks/user-repository.mock";
import {type Option, type Some, some, none, isNone, isSome} from "fp-ts/es6/Option";
import {UserService} from "../../server/applications/user/services/user.service";
import type {UserDto} from "../../shared/models/user.dto";

const userService = new UserService(mockUserRepository);

describe('User Query Tests', () => {
    afterEach(() => {
       vi.clearAllMocks();
    });

    describe('given user exists', () => {

        it('should find a user by ID', async () => {
            // Arrange
            const userId = "user_123456789";
            const expectedUser: User = {
                id: userId,
                authId: "auth0|123456789",
                name: "Test User",
                email: "test@example.com"
            };

            // Setup the mock to return the user
            mockUserRepository.findById.mockImplementation((toRetrieve) => {
                if (toRetrieve === userId) return Promise.resolve(some(expectedUser));
                else return Promise.resolve(none);
            });

            // Act
            const result: Option<UserDto> = await userService.findById(userId);

            // Assert
            expect(isSome(result)).toBeTruthy();
            expect((result as Some<User>).value).toEqual(expectedUser);
        });

        it('should find a user by Auth ID', async () => {
            const authId = "auth0|123456789";
            const expectedUser: User = {
                id: "user_123456789",
                authId: authId,
                name: "Test User",
                email: "test@example.com"
            }

            mockUserRepository.findByAuthId.mockImplementation((toRetrieve) => {
                if (toRetrieve === authId) return Promise.resolve(some(expectedUser));
                else return Promise.resolve(none);
            });

            const result: Option<User> = await userService.findByAuthId(authId);
            expect(isSome(result)).toBeTruthy();
            expect((result as Some<User>).value).toEqual(expectedUser);
        });

        it('should find a user by Auth ID', () => {
            const email = "test@example.com";
            const expectedUser: User = {
                id: "user_123456789",
                authId: "auth0|123456789",
                name: "Test User",
                email: email
            };

            mockUserRepository.findByEmail.mockImplementation((toRetrieve) => {
                if (toRetrieve === email) return Promise.resolve(some(expectedUser))
                else return Promise.resolve(none);
            });
        });
    });

    describe('given user does not exist', () => {
        it('should return none when finding a user by ID', async () => {
            const userId = "user_123456789";

            mockUserRepository.findById.mockResolvedValue(none);

            const result = await userService.findById(userId);

            expect(isNone(result)).toBeTruthy();
        });

        it('should return none when finding a user by Auth ID', async () => {
            const authId = "auth0|123456789";
            mockUserRepository.findByAuthId.mockResolvedValue(none);
            const result = await userService.findByAuthId(authId);
            expect(isNone(result)).toBeTruthy();
        });

        it('should return none when finding a user by email', async () => {
            const email = "test@example.com";
            mockUserRepository.findByEmail.mockResolvedValue(none);
            const result = await userService.findByEmail(email);
            expect(isNone(result)).toBeTruthy();
        });
    });
});