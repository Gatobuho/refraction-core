<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '@/composables/general'

const generalState = useGeneralStore()

const { hasModal } = storeToRefs(generalState)
</script>

<template>
  <div class="h-full" :class="{ 'w-full overflow-hidden': hasModal }">
    <slot />
    <Footer />
  </div>
</template>
