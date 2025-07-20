import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from '#imports'

export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useUserSession()
  
  // If user is authenticated and trying to access a guest-only route
  if (isLoggedIn) {
    // Redirect to dashboard
    return navigateTo('/dashboard')
  }
})