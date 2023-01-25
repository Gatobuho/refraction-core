<script setup lang='ts'>
/* import type { EventData } from '@/types' */
interface Props {
  place: string
  name: string
  startDateTime: string
  endDateTime: string
  icon: string
}
const props = defineProps<Props>()

const when = useDateFormat(new Date(props.startDateTime), 'D ddd, MMMM, HH', { locales: 'es-AR' })
</script>

<template>
  <article class="flex flex-col justify-center items-center gap-y-6">
    <picture class="p-6 rounded-full bg-slate-600 text-slate-200">
      <svg
        viewBox="0 0 103.8 98.9"
        class="w-24 h-24"
      >
        <g>
          <path
            class="iconSvg" d="M58.8,33.4c-0.8,0-1.5-0.7-2-1.1c-0.1-0.1-0.2-0.2-0.3-0.2C54.1,30,52,27.6,50.3,25 c-0.4-0.6-0.8-1.3-1.2-1.9c-2.5-4.4-4-9.3-4.5-14.5c-0.2-1.8-0.2-3.8,0.9-5.4c0.4-0.5,1.2-1.5,2.6-1.7c1.4-0.2,2.9,0.4,4.3,1.9 c3,3.1,4.3,6.9,5.1,10.8c1-3.3,2.4-6.2,4.1-8.7C62.2,4.6,62.9,3.7,64,3c1.2-0.8,2.7-1.2,4-1c1.6,0.2,3.5,1.4,3.9,3.6 c0.3,1.6-0.3,3.2-0.9,4.5c-1,1.9-2,3.8-3,5.6c-1,1.9-2,3.8-2.8,5.7c-0.5,1.2-1,2.4-1.4,3.6c-0.2,0.6-0.5,1.2-0.7,1.8 c-0.6,1.4-1.2,3.1-2.1,4.6c0,0.1-0.1,0.2-0.1,0.3c-0.3,0.6-0.8,1.6-1.9,1.7C58.9,33.4,58.9,33.4,58.8,33.4z M58.8,32.3L58.8,32.3 L58.8,32.3z"
          />
          <ellipse class="iconSvg" cx="73.7" cy="68.1" rx="28.6" ry="29.3" />
          <ellipse class="iconSvg" cx="32.6" cy="65.5" rx="31.1" ry="31.9" />
        </g>
      </svg>
    </picture>
    <h3 class="grid grid-cols-[1fr_12fr_1fr]">
      <svg
        x="0px" y="0px"
        viewBox="0 0 19.8 65.3"
        class="my-2"
      >
        <polygon class="bannerSvg" points="19.8,65.3 19.8,0 0,0 19.3,32.1 0,65.3 " />
      </svg>
      <span class="bg-[#CFD6BB] text-2xl font-bold text-slate-800 px-4 p-4 uppercase">
        Ceremonia
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
      <a href="https://fixdate.io/ar/modelo-invitacion/arte-y-flor#" class="main" translate="no">

        <span class="">Agendar</span>

        <span class="hidden">2023-02-21 22:13:52</span>
        <span class="hidden">2023-02-21 22:13:52</span>
        <span class="hidden">America/Argentina/Buenos_Aires</span>
        <span class="hidden">Se casan Alda & Fran</span>
      </a>
    </div>

    <div class="info-box">
      <h6>Lugar</h6>
      <p>{{ name }}</p>
      <a href="https://fixdate.io/ar/modelo-invitacion/arte-y-flor#">Confirmar asistencia</a>
    </div>

    <div class="info-box">
      <h6>Dirección</h6>
      <p>{{ place }}</p>
      <a href="https://fixdate.io/ar/modelo-invitacion/arte-y-flor#">¿Cómo llegar?</a>
    </div>
  </article>
</template>

<style scoped lang='scss'>
.iconSvg {
    fill: none;
    stroke: #CFD6BB;
    stroke-width: 3;
    stroke-miterlimit: 10;
}
.bannerSvg {
    fill: #CFD6BB;
    @apply h-full;
}
.info-box {
    @apply text-center;
    & h6 {
        @apply text-2xl text-slate-300 font-bold;
    }
    & a {
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
