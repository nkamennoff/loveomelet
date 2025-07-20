import { defineNuxtRouteMiddleware, navigateTo, useUserSession } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  const localePath = useLocalePath();

  // If user is not authenticated and trying to access a protected route
  if (!loggedIn) {
    // Store the original route to redirect back after authentication
    const redirect = to.fullPath
    
    // Redirect to login
    return navigateTo({
      path: localePath('index'),
      query: { redirect }
    })
  }
})