<script setup lang='ts'>
interface Props {
  event: string
  place: string
  name: string
  startDateTime: string
  endDateTime: string
  icon: string
  maps: string
}
const props = defineProps<Props>()

const when = useDateFormat(new Date(props.startDateTime), 'D, MMMM, HH', { locales: 'es-AR' })
</script>

<template>
  <article class="flex flex-col justify-center items-center gap-y-6 max-w-sm">
    <picture class="p-6 rounded-full bg-slate-600 text-slate-200">
      <SvgCeremony />
    </picture>
    <h3 class="grid grid-cols-[15px_1fr_15px]">
      <svg
        x="0px" y="0px"
        viewBox="0 0 19.8 65.3"
        class="my-2"
      >
        <polygon class="bannerSvg" points="19.8,65.3 19.8,0 0,0 19.3,32.1 0,65.3 " />
      </svg>
      <span class="flex items-center bg-[#CFD6BB] text-2xl font-bold text-slate-800 px-4 p-4 uppercase">
        {{ event }}
      </span>
      <svg
        x="0px" y="0px"
        viewBox="0 0 21.2 65.3"
        class="my-2"
      >
        <polygon class="bannerSvg" points="0,0 0,65.3 21.2,65.3 0.8,31.1 21.2,0 " />
      </svg>
    </h3>
    <div class="info-box">
      <h6>Día</h6>
      <p>{{ when }}</p>
      <button class="btn main">
        <span class="">Agendar</span>
      </button>
    </div>

    <div class="info-box">
      <h6>Lugar</h6>
      <p>{{ name }}</p>
      <button class="btn" href="https://fixdate.io/ar/modelo-invitacion/arte-y-flor#">
        Confirmar asistencia
      </button>
    </div>

    <div class="info-box">
      <h6>Dirección</h6>
      <p>{{ place }}</p>
      <button class="btn" href="https://fixdate.io/ar/modelo-invitacion/arte-y-flor#">
        ¿Cómo llegar?
      </button>
    </div>
  </article>
</template>

<style scoped lang='scss'>
.bannerSvg {
    fill: #CFD6BB;
    @apply h-full;
}
.info-box {
    @apply text-center;
    & h6 {
        @apply text-2xl text-slate-300 font-bold;
    }
    & .btn {
        @apply inline-block rounded-xl px-4 py-2 mt-4 transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 hover:scale-110;
        &.main {
           @apply text-slate-100 bg-slate-500 border border-transparent hover:bg-slate-700 hover:border-slate-200;
        }
        &:not(.main) {
            @apply border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-slate-100;
        }
    }
}
</style>
