# Pinia Store Setup for Loveomelet

This directory contains the Pinia stores for state management in the Loveomelet application.

## Overview

Pinia is used as the state management solution for this application. It provides a simple and intuitive API for managing application state, with TypeScript support, devtools integration, and a modular structure.

## Store Structure

The store is organized into separate modules:

- `user.store.ts`: Manages user-related state (authentication, profile, preferences)
- `game.ts`: Manages game-related state (current month, words, activity status)
- `index.ts`: Exports all stores for easier imports

## Usage

### Importing Stores

You can import stores in two ways:

1. **Direct import** (recommended for most components):

```typescript
import { useUserStore, useGameStore } from '~/stores'

// In setup or script setup
const userStore = useUserStore()
const gameStore = useGameStore()
```

2. **Via Nuxt plugin** (available as injected properties):

```typescript
// In a component or page
const { $userStore, $gameStore } = useNuxtApp()
```

### Example Usage

See the `PiniaExample.vue` component for a practical demonstration of how to use the stores in components.

### Creating New Stores

To create a new store:

1. Create a new file in the `stores` directory (e.g., `myStore.ts`)
2. Define your store using the `defineStore` function from Pinia
3. Export your store
4. Add the export to `index.ts`
5. Optionally, add it to the plugin in `plugins/pinia.ts` if you want it available as an injected property

Example:

```typescript
// stores/myStore.ts
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    // state properties
  }),
  getters: {
    // getters
  },
  actions: {
    // actions
  }
})

// Don't forget to add to index.ts
// export * from './myStore'
```

## Best Practices

1. Keep stores focused on specific domains (user, game, etc.)
2. Use getters for derived state
3. Use actions for async operations and logic that modifies state
4. Use TypeScript for better type safety and autocompletion
5. Consider using the composition API style for more complex stores