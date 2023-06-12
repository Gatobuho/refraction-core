<script setup lang="ts">

</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
    <RHeader />
    <main class="content">
      <slot />
    </main>
    <RFooter />
  </div>
</template>
