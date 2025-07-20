<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const {user, isLoggedIn} = useUserSession();
</script>

<template>
  <div>
    This is a dashboard page for user {{ user?.name }} with email {{ user?.email }} that is logged ({{ isLoggedIn ? 'true': 'false' }}). It will be used to display user-specific information and settings.
  </div>
</template>

<style scoped>

</style>