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
  min-height: var(--doc-height);
}
::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
}

::view-transition-new(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
}
</style>
