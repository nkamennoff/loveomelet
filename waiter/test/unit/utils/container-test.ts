import type { Container } from 'inversify';

// Global container instance for testing
let _containerInstance: Container | null = null;

/**
 * Set a container instance for testing
 * This should only be used in test environments
 */
export function setTestContainer(container: Container): void {
    _containerInstance = container;
}

/**
 * Get the container instance for testing
 * This should only be used in test environments
 */
export function getTestContainer(): Container {
    if (!_containerInstance) {
        throw new Error('Test container not initialized. Call setTestContainer() first.');
    }
    
    return _containerInstance;
}

/**
 * Reset the test container
 * This should be called after tests are complete
 */
export function resetTestContainer(): void {
    _containerInstance = null;
}