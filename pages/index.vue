<script setup lang='ts'>
const { data: rawData } = await useFetch('/api/makeProcess')
const { data } = await useFetch('/api/families')
const families = ref()
const guests = ref()

const client = useSupabaseAuthClient()

if (rawData.value) {
  const { result } = rawData.value
  guests.value = result.map((item) => {
    const _newGuest = item[1]
    _newGuest.familyName = item[0].name
    return _newGuest
  })
}
if (data.value)
  families.value = data.value.families

if (data.value && rawData.value) {
  guests.value.forEach((guest) => {
    console.log(guest)
    const family = families.value.find(f => f.name === guest.familyName)
    console.log(family)
    if (family) {
      guest.map((g) => {
        g.familyId = family.id
        return g
      })
    }
    else {
      console.error('No se encontro la familia', guest.familyName)
    }
  })
  const lostFamilieIds = []
  guests.value = guests.value.flat()
  guests.value.forEach((guest) => {
    delete guest.familyName
    const currentFamily = families.value.find(f => f.id === guest.familyId)
    if (currentFamily) {
      if (currentFamily.guests)
        currentFamily.guests.push(guest)
      else
        currentFamily.guests = [guest]
    }
    else {
      console.error('No se encontro la familia', guest.familyId)
      console.error(guest)
      lostFamilieIds.push(guest.familyId)
    }
  })
/*   guests.value = guests.value.filter(g => !lostFamilieIds.includes(g.familyId))

  const { data, error } = await client
    .from('guests')
    .insert(guests.value)

  console.log(data, error) */
}
</script>

<template>
  <main>
    <section class="p-4 rounded bg-slate-800 h-full text-slate-600">
      <div class="table-head">
        <span />
        <span>Familia</span>
        <span />
        <span>Nombre</span>
        <span>Confirmacion</span>
        <span>Grupo</span>
        <span>Acciones</span>
      </div>
      <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list">
          <template v-for="family in families" :key="family.id">
            <li v-for="guest in family.guests" :key="guest.id" class="table-body">
              <input type="checkbox" :class="guest.isHead ? '' : 'opacity-0'">
              <span class="text-sm font-medium text-gray-700" :class="guest.isHead ? '' : 'opacity-0'">
                {{ family.name }}
              </span>
              <span class="i-bx:crown w-5 h-5" :class="guest.isHead ? '' : 'opacity-0'" />
              <span class="text-sm font-medium text-gray-700">
                {{ guest.name }}
              </span>
              <AdminConfirmPill :confirmed="guest.confirmed" />
              <span class="flex text-sm font-medium bg-rose-600 px-2 py-px rounded-full text-white" :class="guest.isHead ? '' : 'opacity-0'">
                {{ family.group }}
              </span>
              <div class="grid grid-cols-2 items-center gap-x-3" :class="guest.isHead ? '' : 'opacity-0'">
                <div class="flex items-center gap-x-2">
                  <span class="i-bx:music w-3 h-3" />
                  <span class="text-sm truncate">{{ family.songTitle }}</span>
                </div>
                <div class="flex items-center gap-x-2">
                  <span class="i-bx:comment-detail w-3 h-3" />
                  <span class="text-sm truncate">{{ family.comments }}</span>
                </div>
              </div>
            </li>
            <li v-if="!family.guests" :key="family.id" class="table-body">
              <input type="checkbox" class="hidden">
              <span class="text-sm font-medium text-gray-700">
                {{ family.name }}
              </span>
              <span class="i-bx:crown w-5 h-5 hidden" />
              <span class="text-sm font-medium text-gray-700 hidden" />
              <AdminConfirmPill :confirmed="0" />
              <span class="flex text-sm font-medium bg-rose-600 px-2 py-px rounded-full text-white">
                {{ family.group }}
              </span>
              <div class="grid grid-cols-2 items-center gap-x-3">
                <div class="flex items-center gap-x-2">
                  <span class="i-bx:music w-3 h-3" />
                  <span class="text-sm truncate">{{ family.songTitle }}</span>
                </div>
                <div class="flex items-center gap-x-2">
                  <span class="i-bx:comment-detail w-3 h-3" />
                  <span class="text-sm truncate">{{ family.comments }}</span>
                </div>
              </div>
            </li>
            <hr>
          </template>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  .table-head,
  .table-body {
    grid-template-columns: 24px 120px 32px 140px 120px 80px 1fr;

    @apply grid gap-12;
  }
  .table-head {
    @apply text-lg font-light text-gray-200 my-4 px-6;
  }

  .table-body {
    @apply text-sm font-normal text-gray-600 items-center px-4 py-4 sm:px-6 hover:bg-gray-100;
  }
</style>
