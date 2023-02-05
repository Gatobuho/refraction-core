<script setup lang="ts">

</script>

<template>
  <h1 class="text-4xl font-bold">
    Hello World!
  </h1>
  <ACard class="popout mb-6" variant="outline" color="primary" title="PopOut" />
  <ACard class="feature mb-6" variant="light" color="primary" title="Feature" />
  <ACard class="full mb-6" color="primary" title="Full" />
  <ACard class="mb-6" color="primary" title="Content" />
  <Suspense>
    <template #fallback>
      <div op50 italic>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
