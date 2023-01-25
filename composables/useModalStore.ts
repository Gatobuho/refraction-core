import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const openedModal = ref('')

  function openModal(modalName: string) {
    openedModal.value = modalName
  }

  function closeModal() {
    openedModal.value = ''
  }

  return {
    openedModal,
    openModal,
    closeModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
