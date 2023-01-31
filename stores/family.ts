import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Family, Guest, WorkingFamily } from '@/types'

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
  async function confirmFamily(confirmGuests: { guests: Guest[]; comment: string }) {
    console.log('confirmFamily', confirmGuests)
    if (!confirmGuests.guests.length) {
      console.error('No guests to confirm')
      return
    }
    if (!confirmGuests.comment) {
      console.error('No comment to confirm')
      return
    }

    // replace the guests in the selected family with the confirmed guests
    selectedFamily.value!.guests = confirmGuests.guests
    selectedFamily.value!.comments = confirmGuests.comment

    try {
      const confirmations = confirmGuests.guests.map((guest) => {
        return {
          id: guest?.id || -1,
          confirmed: guest.confirmed,
        }
      }) || []
      console.log('confirmations', confirmations)
      const confirmation = $fetch('/api/guest/confirm', {
        method: 'PUT',
        body: JSON.stringify(confirmations),
      })
      const comment = $fetch('/api/family/update', {
        method: 'PUT',
        body: JSON.stringify({
          id: selectedFamily.value?.id,
          comments: confirmGuests.comment,
        }),
      })

      return await Promise.all([confirmation, comment])
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
    confirmFamily,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
