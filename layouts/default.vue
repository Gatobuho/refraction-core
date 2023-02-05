<template>
  <div class="layout">
    <header class="p-6 flex justify-between">
      <div>Refraction</div>
      <nav>
        <NuxtLink />
      </nav>
      <div>
        <ABtn variant="text">
          Login
        </ABtn>
      </div>
    </header>
    <main class="content">
      <slot />
    </main>
    <RFooter />
  </div>
</template>

<style scoped lang="postcss">
.layout {
  @apply grid grid-rows-[auto_1fr_auto] h-full;
}
</style>
