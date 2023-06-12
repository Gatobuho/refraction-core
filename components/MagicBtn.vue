<script setup lang='ts'>
// https://codepen.io/jh3y/pen/poxVPqo
interface Props {
  shimmerType?: 'contained' | 'flip' | 'lazy' | 'in-n-out'
}
defineProps<Props>()
</script>

<template>
  <button :class="shimmerType" class="grid px-2 py-4 rounded">
    <span class="spark__container">
      <span class="spark" />
    </span>
    <span class="backdrop" />
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang='postcss'>
:root {
    --transition: 0.25s;
    --spark: 1.8s;
  --speed: 1.2s;
}

button {
  --cut: 0.1em;
  --active: 0;
  --bg:
    radial-gradient(
      40% 50% at center 100%,
      hsl(270 0% 72% / 0.05),
      transparent
    ),
    radial-gradient(
      80% 100% at center 120%,
      hsl(260 0% 70% / 0.1),
      transparent
    ),
    hsl(260 0% 12%);
  background: var(--bg);
  place-items: center;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0.05em 0 0 hsl(260 0% 50%) inset,
    0 -0.05em 0 0 hsl(260 0% 0%) inset;
  transition: box-shadow var(--transition), scale var(--transition), background var(--transition);
  scale: calc(1 + (var(--active) * 0.1));
}

.spark {
  position: absolute;
  inset: 0;
  border-radius: 100px;
  rotate: 0deg;
  overflow: hidden;
  mask: linear-gradient(white, transparent 50%);
  animation: flip calc(var(--spark) * 2) infinite steps(2, end);
}

@keyframes flip {
  to {
    rotate: 360deg;
  }
}

.spark:before {
  content: "";
  position: absolute;
  width: 200%;
  aspect-ratio: 1;
  inset: 0 auto auto 50%;
  z-index: -1;
  translate: -50% -15%;
  rotate: 0;
  transform: rotate(-90deg);
  opacity: calc((var(--active)) + 0.4);
  opacity: 1;
  background: conic-gradient(
    from 0deg,
    transparent 0 340deg,
    white 360deg
  );
  transition: opacity var(--transition);
  animation: rotate var(--spark) linear infinite both;
}

.spark:after {
  content: "";
  position: absolute;
  inset: var(--cut);
  border-radius: 100px;
}

.backdrop {
  position: absolute;
  inset: var(--cut);
  background: var(--bg);
  border-radius: 100px;
  transition: background var(--transition) opacity var(--transition);
}

@keyframes rotate {
  to {
    transform: rotate(90deg);
  }
}

.text {
  translate: 2% -6%;
  letter-spacing: 0.01ch;
  background: linear-gradient(90deg, hsl(0 0% calc((var(--active) * 100%) + 65%)), hsl(0 0% calc((var(--active) * 100%) + 26%)));
  -webkit-background-clip: text;
  color: transparent;
  transition: background var(--transition);
}

.contained .spark__container,
.in-n-out .spark__container{
  position: absolute;
  inset: 0px;
  container-type: size;
  overflow: visible;
}

.contained .spark {
  position: absolute;
  left: 0;
  top: 0;
  height: 100cqh;
  aspect-ratio: 1;
  border-radius: 0;
  overflow: visible;
  mask: none;
  animation: slide var(--speed) ease-in-out infinite alternate;
}

.contained .spark:before {
  --spread: 90deg;
  inset: -100%;
  background: conic-gradient(
    from calc(270deg - (var(--spread) * 0.5)),
    transparent 0,
    hsl(0 0% 100% / 1) var(--spread),
    transparent var(--spread));
  translate: 0 0;
  transform: rotate(0deg);
  width: auto;
  animation: spin calc(var(--speed) * 2) infinite linear;
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }
  15%, 35% {
    rotate: 90deg;
  }
  65%, 85% {
    rotate: 270deg;
  }
  100% {
    rotate: 360deg;
  }
}

@keyframes slide {
  to {
    transform: translate(calc(100cqw - 100%), 0);
  }
}

.lazy .spark {
  width: 100%;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  animation: none;
  mask: none;
}

.lazy .spark:before {
  width: 100%;
  aspect-ratio: 1;
  inset: 50% auto auto 50%;
  position: absolute;
  translate: -50% -50%;
  animation: lazy 2s infinite linear;
  background: conic-gradient(transparent, white 60deg, transparent 61deg);
}

@keyframes lazy {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.in-n-out .spark {
  position: absolute;
  right: 100%;
  top: 50%;
  translate: -200% -50%;
  width: 200cqh;
  aspect-ratio: 1;
  border-radius: 0;
  overflow: visible;
  mask: none;
  animation: slide var(--speed) ease-in-out infinite alternate;
  animation: slide-across 2s infinite linear;
}
.in-n-out .spark:before {
  width: 500%;
  aspect-ratio: 1;
  inset: unset;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  position: absolute;
  animation: none;
  background: linear-gradient(180deg, transparent, white 25%, transparent 30%);
}

@keyframes slide-across {
  to {
    translate: calc(100cqw + 100%) -50%;
  }
}
</style>
