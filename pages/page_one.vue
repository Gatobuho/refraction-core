<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '@/composables/general'
import { CIVIL, PARTY } from '@/constants'
const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = useCountdown(
  PARTY.startDateTime,
)
const topDate = useDateFormat(PARTY.startDateTime, 'DD.MM.YYYY')

const generalState = useGeneralStore()

const { openModal } = (generalState)
const { hasModal } = storeToRefs(generalState)
</script>

<template>
  <!-- Portada -->
  <section class="relative h-9/10">
    <NuxtPicture
      format="webp"
      class="absolute inset-0 -z-1"
      preload
      src="/images/fondo.png"
      :img-attrs="{ class: 'relative h-full w-full object-cover' }"
    />
    <div class="absolute inset-x-0 top-0 flex justify-center">
      <NuxtPicture
        format="webp"
        class="header-decoration delay-3"
        preload
        src="/images/Grupo01_a.png"
        :img-attrs="{ class: 'max-h-50' }"
      />
      <NuxtPicture
        format="webp"
        class="header-decoration"
        preload
        src="/images/Grupo01_b.png"
        :img-attrs="{ class: 'max-h-50' }"
      />
      <NuxtPicture
        format="webp"
        class="header-decoration delay-2"
        preload
        src="/images/Grupo01_c.png"
        :img-attrs="{ class: 'max-h-50' }"
      />
    </div>

    <div
      class="pt-40 flex flex-col justify-center items-center gap-y-6 max-w-sm mx-auto"
    >
      <div class="grid grid-cols-[1fr_120px_1fr] w-full items-center gap-4 px-6">
        <div class="date-decorator" />
        <span class="text-2xl">
          {{ topDate }}
        </span>
        <div class="date-decorator" />
      </div>
      <h1 class="text-6xl center flex flex-col items-center">
        <span>Alda</span>
        <span>&</span>
        <span>Fran</span>
      </h1>
      <div class="p-6 w-full">
        <div class="date-decorator" />
      </div>
      <h2>Hola [FAMILIA]</h2>
    </div>
    <InviteTopCurve
      class="absolute -bottom-px"
      color-one="#475569"
      color-two="#334155"
      color-three="#1e293b"
    />
  </section>
  <!-- Cuenta Regresiva -->
  <section class="bg-slate-800 flex justify-center items-center py-10">
    <div class="grid max-w-lg">
      <NuxtPicture
        format="webp"
        class="col-start-1 row-start-1"
        loading="lazy"
        src="/images/contador_2.png"
      />
      <div
        class="col-start-1 row-start-1 flex flex-col gap-y-8 justify-center items-center"
      >
        <span class="text-4xl font-bold">Falta</span>

        <div class="flex divide-x-2 divide-slate-500">
          <div class="flex flex-col gap-y-3 px-4 py-1 items-center w-20">
            <span class="text-4xl font-light">{{ daysLeft }}</span>
            <span class="text-lg font-bold">días</span>
          </div>

          <div class="flex flex-col gap-y-3 px-4 py-1 items-center w-20">
            <span class="text-4xl font-light">{{ hoursLeft }}</span>
            <span class="text-lg font-bold">hs</span>
          </div>

          <div class="flex flex-col gap-y-3 px-4 py-1 items-center w-20">
            <span class="text-4xl font-light">{{ minutesLeft }}</span>
            <span class="text-lg font-bold">min</span>
          </div>

          <div class="flex flex-col gap-y-3 px-4 py-1 items-center w-20">
            <span class="text-4xl font-light">{{ secondsLeft }}</span>
            <span class="text-lg font-bold">seg</span>
          </div>
        </div>

        <span class="text-xl font-bold"> para nuestra boda </span>
      </div>
    </div>
  </section>
  <!-- Ceremonia - Fiesta -->
  <section class="bg-slate-800 relative py-10">
    <aside class="absolute grid top-10 -left-22 opacity-50 z-0">
      <NuxtPicture
        format="webp"
        class="col-start-1 row-start-1"
        loading="lazy"
        src="/images/Grupo02_a.png"
      />
      <NuxtPicture
        format="webp"
        class="col-start-1 row-start-1"
        loading="lazy"
        src="/images/Grupo02_b.png"
      />
      <NuxtPicture
        format="webp"
        class="col-start-1 row-start-1"
        loading="lazy"
        src="/images/Grupo02_c.png"
      />
    </aside>
    <InviteEventCard class="z-10 relative mb-20" v-bind="PARTY" icon="" />
    <InviteGoldenLines />
    <InviteEventCard class="z-10 relative mb-20" v-bind="CIVIL" icon="" />
  </section>
  <!-- Fiesta -->
  <section class="bg-slate-800 px-6 flex flex-col justify-center text-center">
    <InviteGoldenLines2 />
    <h2 class="text-4xl font-light">
      Fiesta
    </h2>
    <p class="mb-14">
      Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
    </p>
    <div class="relative flex flex-col gap-8">
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo03.png"
        class="absolute -top-40 -left-30 scale-50"
      />
      <!-- Canciones -->
      <InvitePartyCard
        title="Musica"
        text="¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?"
        icon="musica"
        btn-text="sugerir canción"
        modal="music"
      />
      <!-- Dress Code -->
      <InvitePartyCard
        title="Dress Code"
        text="Una orientación para <br> tu vestuario"
        icon="vestuario"
        btn-text="ver más"
        modal="vestuario"
      />
      <!-- Notas -->
      <InvitePartyCard
        title="Tips y Notas"
        text="Información adicional <br> para tener en cuenta"
        icon="tips"
        btn-text="+ Info"
        modal="tips"
      />
    </div>
  </section>
  <!-- Regalos -->
  <section class="relative">
    <div class="absolute w-6/12 -right-10 top-50 opacity-50 -z-0">
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo02_a.png"
        class="absolute -scale-x-100"
        :img-attrs="{ class: 'inline-block' }"
      />
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo02_b.png"
        class="absolute -scale-x-100"
        :img-attrs="{ class: 'inline-block' }"
      />
      <NuxtPicture
        format="webp"
        loading="lazy"
        src="/images/Grupo02_c.png"
        class="absolute -scale-x-100"
        :img-attrs="{ class: 'inline-block' }"
      />
    </div>

    <div class="flex flex-col text-center gap-y-10 max-w-sm mx-auto px-10">
      <h2 class="text-3xl">
        Regalos
      </h2>
      <p class="subtitle">
        Si deseas regalarnos algo más que tu hermosa presencia...
      </p>

      <NuxtPicture
        class="inline-block"
        preload
        src="/svg/regalos.svg"
        :img-attrs="{ class: 'h-24 w-24 mx-auto' }"
      />

      <br>

      <button
        class="rounded-xl bg-slate-100 text-slate-600 font-bold px-6 py-2 uppercase w-50 mx-auto"
        @click="openModal('regalos')"
      >
        Ver más
      </button>
    </div>
  </section>
  <!-- Instagram -->
  <section class="relative h-8/12">
    <NuxtPicture
      format="webp"
      class="absolute inset-0 -z-1"
      preload
      src="/images/fondo.png"
      :img-attrs="{ class: 'relative h-full w-full object-cover' }"
    />
    <div class="max-w-sm mx-auto px-4 text-center space-y-12">
      <h2 class="text-3xl">
        Compartimos este día junto a vos
      </h2>
      <p class="px-4">
        Compartí tus fotos y videos de ese hermoso día
      </p>

      <div class="px-4" />

      <div class="px-4">
        <a
          target="_blank"
          href="https://www.instagram.com/"
          class="text-4xl font-ligth tracking-wide text-slate-300 uppercase"
        >#aldayfran</a>
      </div>

      <a
        class="inline-block rounded-full bg-slate-100 text-slate-600 font-bold px-6 py-3 uppercase"
        target="_blank"
        href="https://www.instagram.com/"
      >Ver en Instagram</a>
    </div>
  </section>
  <Teleport to="body">
    <InviteModal v-show="hasModal" />
  </Teleport>
  <!-- Footer -->
  <section class="flex flex-col px-6 gap-y-5 items-center">
    <h4 class="text-3xl font-light flex text-center gap-4">
      <span>Alda</span>
      <span class="text-slate-500">&</span>
      <span>Fran</span>
    </h4>
    <button @click="openModal('ceremonia')">
      Confirmar asistencia a ceremonia
    </button>
    <button @click="openModal('fiesta')">
      Confirmar asistencia a fiesta
    </button>
    <button @click="openModal('music')">
      Sugerir canción
    </button>
    <ul>
      <li>
        <div
          id="addeventatc3"
          title=""
          class="addeventatc"
          aria-haspopup="true"
          aria-expanded="false"
          tabindex="0"
          translate="no"
          data-loaded="true"
          style="visibility: visible"
        >
          <span class="nameBtn atc_node notranslate">Agendar Fiesta</span>

          <span class="start atc_node notranslate">2023-02-21 22:13:52</span>
          <span class="end atc_node notranslate">2023-02-21 22:13:52</span>
          <span class="timezone atc_node notranslate">America/Argentina/Buenos_Aires</span>
          <span class="title atc_node notranslate">Boda de Fede y Lore (Fiesta)</span>
        </div>
      </li>

      <li>
        <div
          id="addeventatc4"
          title=""
          class="addeventatc"
          aria-haspopup="true"
          aria-expanded="false"
          tabindex="0"
          translate="no"
          data-loaded="true"
          style="visibility: visible"
        >
          <span class="nameBtn atc_node notranslate">Agendar Ceremonia</span>

          <span class="start atc_node notranslate">2023-02-21 22:13:52</span>
          <span class="end atc_node notranslate">2023-02-21 22:13:52</span>
          <span class="timezone atc_node notranslate">America/Argentina/Buenos_Aires</span>
          <span class="title atc_node notranslate">Boda de Fede y Lore (Ceremonia)</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
section {
    @apply py-12;
}
.header-decoration {
    @apply absolute -top-20;
    animation: drop-fade 1.5s ease-in-out both;
    animation-delay: 1s;
    &.delay-2 {
        animation-delay: 0.75s;
    }
    &.delay-3 {
        animation-delay: 0.5s;
    }
}
.date-decorator {
    @apply w-full h-px bg-slate-100;
}

@keyframes drop-fade {
    from {
        opacity: 0;
        transform: translateY(-100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
