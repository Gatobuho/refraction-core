import { acceptHMRUpdate, defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedName = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  /**
   * Creates a new user from the given data.
   * https://twitter.com/srsholmes/status/1657087920522641408
   * if the created_at property is not set, it will be set to the current date.
   *
  */
  const createNewUser = (userData: User) => {
    const newUser = { ...userData }
    newUser.created_at ??= new Date().toISOString()

    return newUser
  }

  return {
    setNewName,
    otherNames,
    savedName,
    createNewUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
