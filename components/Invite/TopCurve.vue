<script setup lang='ts'>
interface Props {
  colorOne?: string
  colorTwo?: string
  colorThree?: string
}
withDefaults(
  defineProps<Props>(),
  {
    colorOne: '#004037',
    colorTwo: '#00534E',
    colorThree: '#002D27',
  },
)
</script>

<template>
  <svg
    viewBox="0 0 8192 1486.2"
  >

    <g>
      <path
        :style="`fill: ${colorOne}`" d="M2494.5,1507.6h6056.7l32.5-613.2c0,0-1418.9-792.2-2885-496.6s-1844.5,981.3-3204.2,756.7 L2494.5,1507.6L2494.5,1507.6z"
      />
      <path :style="`fill: ${colorTwo}`" d="M8578.4,1429.3l-38-796.7c0,0-801.5,455.8-2828.8,78.6S902.7-561.8-228.8,695.5v733.8H8578.4z" />
      <path
        :style="`fill: ${colorThree}`" d="M-1288.3,1507.5h10296L8949,679.7c0,0-848.7,1053-3520.3,644.4S179.8-420.3-1281.7,1292.7 C-1281.7,1292.7-1284.6,1378.6-1288.3,1507.5L-1288.3,1507.5z"
      />
    </g>
  </svg>
</template>
