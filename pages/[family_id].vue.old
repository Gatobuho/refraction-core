<script setup lang="ts">
// get the family id from the route
const { family_id } = useRoute().params
</script>

<template>
  <main>
    <h1>{{ family_id }}</h1>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <img src="/images/blazer.gif">
  </main>
</template>
