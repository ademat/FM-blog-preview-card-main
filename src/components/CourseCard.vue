<script setup lang="ts">
    import TagBase from './TagBase.vue';
    import UserAvatar from './UserAvatar.vue';

</script>

<template>
    <div class="h-[522px] w-96 border border-black rounded-large shadow-large flex flex-col items-start p-6 gap-6 bg-white">
        <img src="@/assets/illustration-article.svg" class="h-[200px] w-[336px] rounded-medium">
        <div class="flex flex-col items-start gap-3">
            <TagBase text="Learning" color-class="bg-yellow"/>
            <div class="text-sm font-medium">Published 21 Dec 2023</div>
            <div class="text-2xl font-extrabold hover:text-yellow cursor-pointer">HTML & CSS foundations</div>
            <div class="font-medium text-gray">These languages are the backbone of every website, defining structure, content, and presentation.</div>
        </div>
        <div class="flex items-center gap-3">
            <UserAvatar  image-url="/image-avatar.webp"/>
            <div class="text-sm font-extrabold">Greg Hooper</div>
        </div>
    </div>
</template>