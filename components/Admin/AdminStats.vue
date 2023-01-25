<script setup lang="ts">
interface Metric {
  name: string
  value: string
  unit: string
}
interface Props {
  metrics: Metric[]
}
defineProps<Props>()
</script>

<template>
  <dl class="rounded-lg shadow-lg bg-slate-100/10 divide-y-2 sm:divide-y-0 sm:flex sm:divide-x-2">
    <div v-for="metric in metrics" :key="metric.name" class="flex grow flex-col p-6 text-center">
      <dt class="order-2 mt-2 font-medium leading-6 text-gray-500">
        {{ metric.name }}
      </dt>
      <dd class="order-1 text-4xl font-bold tracking-tight text-rose-400">
        {{ metric.value }}{{ metric.unit }}
      </dd>
    </div>
  </dl>
</template>

