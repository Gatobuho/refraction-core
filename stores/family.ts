import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Family, WorkingFamily } from '@/types'

export const useFamilyStore = defineStore('family', () => {
  const families = ref<Array<WorkingFamily | Family>>([])
  const selectedFamily = ref<WorkingFamily | Family | null>(null)

  function selectFamily(fam: WorkingFamily | Family | null) {
    selectedFamily.value = fam
  }

  async function fetchFamilies() {
    const res = await $fetch('/api/families')
    families.value = res.families

    return res
  }

  async function fetchFamilyByUUID(uuid: string) {
    try {
      const res = await $fetch(`/api/family/${uuid}`)
      selectFamily(res.family)
      return res.family
    }
    catch (err) {
      console.error(err)
    }
  }

  /* async function createFamily(family: WorkingFamily) {
    const res = await $fetch('/api/families', {
      method: 'POST',
      body: JSON.stringify(family),
    })

    families.value.push(res.family)
    return res
  } */

  return {
    families,
    selectedFamily,
    selectFamily,
    fetchFamilies,
    fetchFamilyByUUID,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
