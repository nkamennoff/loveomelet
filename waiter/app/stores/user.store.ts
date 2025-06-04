// import { defineStore } from 'pinia'
// import type {User} from "@shared/domains/user/model/user.model";

/*
export const useUserStore = defineStore('user', {
  state: (): Omit<User, 'id'> & Partial<Pick<User, 'id'>> => ({
    id: undefined,
    name: '',
    email: '',
  }),

  getters: {
    // Get user's full profile
    userProfile: (state) => {
      return {
        id: state.id,
        name: state.name,
        email: state.email,
      }
    },
  },

  actions: {
    // Set user data after login or profile update
    setUserData(userData: User) {
      this.id = userData.id
      this.name = userData.name
      this.email = userData.email
    },

    // Clear user data on logout
    clearUserData() {
      this.id = undefined
      this.name = ''
      this.email = ''
      // Keep preferences for better UX when user logs back in
    }
  }
})
*/
