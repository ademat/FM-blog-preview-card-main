<script setup lang="ts">
defineProps<{
  imageUrl: string
}>()
</script>

<template>
  <img class="rounded-full h-8 w-8" :src="imageUrl" alt="avatar" />
</template>
