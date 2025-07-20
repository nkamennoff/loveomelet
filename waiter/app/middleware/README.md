# Navigation Guards Implementation

This document describes the implementation of navigation guards in the Loveomelet application.

## Overview

Navigation guards are middleware functions that control access to routes based on certain conditions, such as authentication status. In this implementation, we've created two types of middleware:

1. **Auth Middleware**: Protects routes that require authentication
2. **Guest Middleware**: Restricts authenticated users from accessing guest-only routes

## Implementation Details

### Auth Middleware

The `auth.ts` middleware checks if a user is authenticated using the `useUserSession` composable. If the user is not authenticated, they are redirected to the home page with a query parameter that stores the original route for redirection after authentication.

```typescript
// auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = useUserSession()
  
  // If user is not authenticated and trying to access a protected route
  if (!isLoggedIn) {
    // Store the original route to redirect back after authentication
    const redirect = to.fullPath
    
    // Redirect to login
    return navigateTo({
      path: '/',
      query: { redirect }
    })
  }
})
```

### Guest Middleware

The `guest.ts` middleware checks if a user is authenticated using the `useUserSession` composable. If the user is authenticated, they are redirected to the dashboard page, as they shouldn't access guest-only routes.

```typescript
// guest.ts
import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from '#imports'

export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useUserSession()
  
  // If user is authenticated and trying to access a guest-only route
  if (isLoggedIn) {
    // Redirect to dashboard
    return navigateTo('/dashboard')
  }
})
```

## Usage

### Protected Routes

To protect a route that requires authentication, add the auth middleware to the page component using `definePageMeta`:

```typescript
<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>
```

### Guest-Only Routes

For routes that should only be accessible to unauthenticated users (like login or registration pages), add the guest middleware:

```typescript
<script setup lang="ts">
definePageMeta({
  middleware: ['guest']
})
</script>
```

## Current Configuration

In the current implementation:

- The dashboard page (`/dashboard`) is protected with the auth middleware
- The home page (`/`) and about page (`/about`) are public and accessible to all users
- Future pages like registration or login should use the guest middleware

## Future Considerations

When implementing new pages:

1. For pages that require authentication (user profile, settings, etc.), apply the auth middleware
2. For pages that should only be accessible to unauthenticated users (login, registration), apply the guest middleware
3. For public pages (landing page, about, etc.), no middleware is needed