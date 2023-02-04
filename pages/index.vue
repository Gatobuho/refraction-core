<script setup lang="ts">

</script>

<template>
  <main>
    <h1 class="text-4xl font-bold">
      Hello World!
    </h1>
    <Suspense>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </main>
</template>
