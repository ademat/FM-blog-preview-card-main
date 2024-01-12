<script setup lang="ts">
    defineProps<{
        imageUrl: string;
    }>();
</script>

<template>
    <img class="rounded-full w-8 h-8" :src="imageUrl"/>
</template>