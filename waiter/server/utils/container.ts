import type {Container} from 'inversify';
import { useNitroApp } from 'nitropack/runtime';

// Re-export symbols from symbols.ts
export * from './symbols';

/**
 * Get the container instance from NitroApp
 */
export function useContainer(): Container {
    const nitroApp = useNitroApp();

    if (!nitroApp.$container) {
        throw new Error('Inversify container not initialized');
    }

    return nitroApp.$container;
}