<script setup lang="ts">
const router = useRouter()

const validNav = computed(() => {
  const routes = router.getRoutes()
  const validRoutes = routes.filter((route) => {
    return route.path !== '/' && route.path !== '/404' && (!route.path.includes(':'))
  })
  return validRoutes
})
</script>

<template>
  <header class="p-6 flex justify-between">
    <NuxtLink to="/">
      Refraction
    </NuxtLink>
    <nav class="space-x-4">
      <NuxtLink v-for="validLink in validNav" :key="validLink.name" :to="validLink.path">
        {{ validLink.name }}
      </NuxtLink>
    </nav>
  </header>
</template>
