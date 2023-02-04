<script setup lang="ts">
const documentHeight = () => {
  // https://nirazanbasnet.medium.com/dont-use-100vh-for-mobile-responsive-43a709c7e9e6
  document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
onMounted(() => {
  if (document)
    documentHeight()

  if (window)
    window.addEventListener('resize', documentHeight)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
 --doc-height: 100vh;
}
html, body , #__nuxt{
  @apply m-0 p-0 w-full bg-base color-base;
  height: var(--doc-height);
}
</style>
