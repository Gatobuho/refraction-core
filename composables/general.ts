import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const currentModal = ref<string | null>(null)
  const hasModal = computed(() => currentModal.value !== null)

  function setModal(modal: string | null) {
    currentModal.value = modal
  }

  function openModal(modal: string) {
    currentModal.value = modal
  }

  function closeModal() {
    currentModal.value = null
  }

  return {
    currentModal,
    hasModal,
    setModal,
    openModal,
    closeModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
