<script setup lang='ts'>
import { useGeneralStore } from '@/composables/general'

const generalState = useGeneralStore()

const { closeModal } = (generalState)
</script>

<template>
  <aside class="modal__backdrop">
    <article class="modal__box">
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo_PopUpMusica.webp"
        class="modal-decoration top"
        :img-attrs="{ class: 'inline-block' }"
      />
      <h3 class="modal__title">
        Plan 1
      </h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <button class="modal__btn" @click="closeModal">
        Contratar
      </button>
      <InviteCalendarModal />
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo_PopUpMusica-2.webp"
        class="modal-decoration bottom"
        :img-attrs="{ class: 'inline-block' }"
      />
    </article>
  </aside>
</template>

<style scoped lang='scss'>
.modal {
  &__backdrop {
    @apply fixed inset-0 bg-slate-700/10 backdrop-blur-md z-30 flex justify-center items-center h-full;
  }
  &__box {
    @apply max-w-md rounded p-5 pt-2 bg-slate-700 relative transform;
    animation: fade-in 0.6s ease-in-out;
  }
  &-decoration {
    @apply absolute -z-1 w-full inset-x-0 transition;
    &.top {
      @apply top-0 -translate-y-full -scale-x-100;
    }
    &.bottom {
      @apply bottom-0 translate-y-full;
    }
  }
  &__title {
    @apply text-2xl text-center font-bold mb-4;
  }
  &__btn {
    @apply rounded-xl bg-slate-100 border border-transparent text-slate-700 hover:bg-transparent hover:text-slate-100 hover:border-slate-100 py-1 px-3 mx-auto;
  }
}
@keyframes fade-in {
  0% {
    @apply opacity-0 scale-50;
  }
  90% {
    @apply opacity-100 scale-105;
  }
  100% {
    @apply opacity-100 scale-100;
  }
}
</style>
