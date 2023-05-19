<script setup lang="ts">
/* definePageMeta({
  layout: 'empty',
}) */
</script>

<template>
  <h1>Magic Card</h1>
  <MagicCard class="w-full">
    <div class="relative h-full flex flex-col md:justify-center">
      <h2 class="text-2xl font-medium text-white">
        Deploy Everywhere
      </h2>

      <div class="mt-4 text-gray-400 md:w-1/2 md:text-lg">
        Studio works on any hosting platform. <br>
        Deploy on GitHub pages in one click.
      </div>
    </div>
  </MagicCard>
</template>

<style lang="postcss" scoped>
  h1 {
    view-transition-name: header;
  }
</style>
