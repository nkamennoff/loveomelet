import type { Container } from 'inversify';

declare module 'nitropack' {
    interface NitroApp {
        container: Container;
    }
}