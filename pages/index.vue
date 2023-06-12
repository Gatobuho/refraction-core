<script setup lang="ts">

</script>

<template>
  <h1 class="text-4xl font-bold">
    Hello World!
  </h1>
  <div class="popout mb-6" variant="outline" color="primary" title="PopOut" />
  <div class="feature mb-6" variant="light" color="primary" title="Feature" />
  <div class="full mb-6" color="primary" title="Full" />
  <div class="mb-6" color="primary" title="Content" />
  <Suspense>
    <template #fallback>
      <div op50 italic>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>

<style lang="postcss" scoped>
h1 {
    view-transition-name: header;
  }
</style>
