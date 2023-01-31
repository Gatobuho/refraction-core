<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import type { ConfirmationStatusType, Guest } from '@/types'
import { useFamilyStore } from '@/stores/family'

const { confirmFamily } = useFamilyStore()
const familyState = useFamilyStore()
const { selectedFamily } = storeToRefs(familyState)
const guests = ref([] as Guest[])
const comment = ref('')

function handleConfirmChange(guest: Guest) {
  const index = guests.value.findIndex(g => g.id === guest.id)
  if (index !== -1)
    guests.value.splice(index, 1, guest)

  else
    guests.value.push(guest)

  console.log('guests', guests.value)
}

function handleConfirm() {
  console.log('cosas', { guests: guests.value, comment: comment.value })
  confirmFamily({ guests: guests.value, comment: comment.value })
}

onBeforeMount(() => {
  guests.value = selectedFamily.value?.guests || [] as Guest[]
  comment.value = selectedFamily.value?.comments || ''
})
</script>

<template>
  <section class="space-y-4 flex flex-col items-end">
    <template v-for="g in guests" :key="g.id">
      <InviteGuestSelection :guest="g" class="w-full" @change="handleConfirmChange" />
    </template>
    <label for="party_comment" class="mt-6 inline-block">
      <span class="text-sm">Comentanos restricción alimenticia y cualquier otra cosa</span>
      <textarea id="party_comment" v-model="comment" placeholder="1 vegano - 2 vegetarianos - todos listos para menear" class="w-full rounded-lg border border-slate-200 bg-transparent px-4 pt-3 pb-5 my-3 min-h-10" />
    </label>
    <button class="btn main" @click="handleConfirm">
      Contestar
    </button>
  </section>
</template>

<style scoped lang='scss'>

</style>
