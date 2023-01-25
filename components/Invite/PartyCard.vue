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
  <div class="bg-slate-600 rounded-xl shadow max-w-sm relative flex-shrink-0 w-screen-sm">
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

      <button class="btn rounded-xl bg-slate-100 text-slate-600 font-bold px-6 py-2 uppercase">
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.btn {
        @apply inline-block rounded-xl px-4 py-2 mt-4 transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 hover:scale-110;
        &.main {
           @apply text-slate-100 bg-slate-500 border border-transparent hover:bg-slate-700 hover:border-slate-200;
        }
        &:not(.main) {
            @apply border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-slate-100;
        }
    }
</style>
