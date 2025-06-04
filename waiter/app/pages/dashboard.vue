<script setup lang="ts">

const {user, isLoggedIn} = useUserSession();
</script>

<template>
THis is a dashboard page for user {{ user?.name }} with email {{ user?.email }} that is logged ({{ isLoggedIn ? 'true': 'false' }}). It will be used to display user-specific information and settings.
</template>

<style scoped>

</style>