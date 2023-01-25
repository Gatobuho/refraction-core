<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: true,
  },
  modal: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="bg-slate-600 rounded-xl shadow max-w-sm relative">
    <div class="p-6 space-y-8">
      <h3 class="text-2xl font-bold">
        {{ title }}
      </h3>

      <NuxtPicture
        class="inline-block"
        preload
        :src="`/svg/${icon}.svg`"
        :img-attrs="{ class: 'h-24 w-24 mx-auto' }"
      />

      <p v-html="text" />

      <button class="rounded-xl bg-slate-100 text-slate-600 font-bold px-6 py-2 uppercase">
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
