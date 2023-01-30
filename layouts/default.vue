<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '@/composables/general'

const generalState = useGeneralStore()

const { hasModal } = storeToRefs(generalState)
</script>

<template>
  <div class="h-full">
    <slot />
    <Footer />
  </div>
</template>
