<script setup lang="ts">
const doc_hight = ref('100vh')
const documentHeight = () => {
  // https://nirazanbasnet.medium.com/dont-use-100vh-for-mobile-responsive-43a709c7e9e6
  const doc = document.documentElement
  doc_hight.value = `${window.innerHeight}px`
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
html, body , #__nuxt{
  @apply m-0 p-0 w-full;
  height: v-bind('doc_hight');
}

html.dark {
  background: #222;
  color: white;
}
</style>
