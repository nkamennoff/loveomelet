/*
// Plugin to auto-import stores
import { useUserStore } from '~/stores'
import type {Pinia} from "pinia";

export default defineNuxtPlugin(({$pinia}) => {
  return {
    provide: {
      userStore: useUserStore($pinia as Pinia),
    }
  }
})*/
