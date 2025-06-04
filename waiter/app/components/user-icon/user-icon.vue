<script setup lang="ts">
  import { ref, watch } from "vue";
  import type { UserIconEmits, UserIconProps } from "~/components/user-icon/user-icon.type";
  import type { UserDto } from "@shared/models/user.dto";
  import type {DropdownMenuItem} from "@nuxt/ui/components/DropdownMenu.vue";

  const props = defineProps<UserIconProps>();
  const emit = defineEmits<UserIconEmits>();

  const user = ref<UserDto>(props.user);
  watch(() => props.user, (newValue) => { user.value = newValue; });
  console.log("user-icon props", props);

  const items = ref<DropdownMenuItem[]>([
    {
      label: "profiles",
      icon: "icon-park-outline:user",
      onSelect(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        emit("select", "profile");
      }
    },
    {
      label: "dashboard",
      icon: "icon-park-outline:data-sheet",
      onSelect(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        emit("select", "dashboard");
      }
    },
    {
      label: "logout",
      icon: "icon-park-outline:logout",
      onSelect(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        emit("select", "logout");
      }
    }
  ]);
</script>

<template>
  <UTooltip :text="user.name">
    <UDropdownMenu :items="items">
      <UAvatar :alt="user.name" size="md" />
    </UDropdownMenu>
  </UTooltip>
</template>

<style scoped>

</style>