<script setup lang="ts">
const changingWidthSource = ref(100)
const changingWidthOutput = useTransition(changingWidthSource, {
  duration: 1000,
})
const changingWidth = computed(() => `${changingWidthOutput.value}%`)

const changingClock = ref<ReturnType<typeof setInterval>>()

onMounted(() => {
  changingClock.value = setInterval(() => {
    const randomWidth = Math.round(Math.random() * 100)
    changingWidthSource.value = Math.max((Math.min(randomWidth, 100)), 25)
  }, 1000 * 5)
})

onBeforeMount(() => {
  clearInterval(changingClock.value)
})
</script>

<template>
  <h1 class="text-4xl font-bold">
    Hello World!
  </h1>
  <div class="w-changing">
    <h2 class="text-4xl font-bold balanced">
      This is a super long title text to test balance
    </h2>
    <h2 class="text-4xl font-bold">
      This is a super long title text not balanced
    </h2>
  </div>
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

<style lang="postcss" scoped>
h1 {
    view-transition-name: header;
  }
  .w-changing {
    width: v-bind(changingWidth);
    & > .balanced {
      text-wrap: balance;
    }
  }
</style>
