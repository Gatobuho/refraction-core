<template>
  <div>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <MagicHero class="w-full h-20" />
    <div class="flex">
      <picture class="revealing">
        <img src="https://useruploads.socratic.org/FdYJ7rcdS0O9C6N2gKLe_prism.jpg">
      </picture>
      <picture class="blur-in">
        <img src="https://useruploads.socratic.org/FdYJ7rcdS0O9C6N2gKLe_prism.jpg">
      </picture>
    </div>
    <article>
      <div />
      <h2 />
      <p />
    </article>
  </div>
</template>

  <style scoped>
    picture > img {
      @apply aspect-ratio-square object-cover;
    }
    .revealing > img {
      animation: reveal 1s ease-in-out;
    }
    .blur-in > img {
      animation: blur-in 1s ease-in-out;
    }
    @keyframes reveal {
      0% {
        mask: linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400% no-repeat;
        opacity: .2;
      }
      100% {
        mask: linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat;
        opacity: 1;
      }
    }
    @keyframes blur-in {
      0% { opacity: 0; filter: brightness(1) blur(20px) }
    10% { opacity: 1; filter: brightness(2) blur(10px) }
    100% { opacity: 1; filter: brightness(1) blur(0) }
    }
    article {
      @apply rounded w-full shadow grid grid-cols-6 gap-2 grid-rows-3 bg-slate-800;
    }
    article > div {
      @apply h-10 aspect-ratio-square rounded-full col-span-2 row-span-3;
    }
    article > h2 {
      @apply text-2xl font-bold text-center col-span-4 row-span-1 rounded;
    }
    article > p {
      @apply text-center col-span-4 row-span-1 rounded;
    }
    article > div,
    article > h2,
    article > p {
      background: linear-gradient(-75deg, transparent 30%, #f43f5e 50%, transparent 70%) 0 0 / 200% 100%, #7e22ce;
      background-attachment: fixed;
      animation: skeleton 2s infinite linear;
    }

    @keyframes skeleton {
      to {
        background-position: -200% 0;
      }
    }
  </style>

