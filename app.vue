<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '@/composables/general'

const generalState = useGeneralStore()

const { hasModal } = storeToRefs(generalState)
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})

const documentHeight = () => {
  // https://nirazanbasnet.medium.com/dont-use-100vh-for-mobile-responsive-43a709c7e9e6
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
watch(hasModal, (val) => {
  const doc = document.documentElement
  if (val)
    doc.style.setProperty('--doc-height', '100vh')

  else
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
})
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
 --doc-height: 100%;
}
html, body , #__nuxt{
  margin: 0;
  padding: 0;
  height: 100vh; /* fallback for Js load */
  height: var(--doc-height);
}

html.dark {
  background: #222;
  color: white;
}
</style>
