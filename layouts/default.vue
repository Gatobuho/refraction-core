<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <RHeader />
    <main class="content">
      <slot />
    </main>
    <RFooter />
  </div>
</template>

<style scoped lang="postcss">
.layout {
  @apply grid grid-rows-[auto_1fr_auto] h-full;
}
</style>
