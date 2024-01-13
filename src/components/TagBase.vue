<script setup lang="ts">
defineProps<{
  text: string
  colorClass: string
}>()
</script>

<template>
  <div class="rounded-small px-2 py-1 text-xs font-extrabold sm:text-sm" :class="colorClass">
    {{ text }}
  </div>
</template>
