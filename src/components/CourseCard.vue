<script setup lang="ts">
import TagBase from './TagBase.vue'
import UserAvatar from './UserAvatar.vue'
</script>

<template>
  <div
    class="flex h-[522px] w-96 flex-col items-start gap-6 rounded-large border border-black bg-white p-6 shadow-large"
  >
    <img
      src="@/assets/illustration-article.svg"
      class="h-[200px] w-[279px] rounded-medium sm:w-[336px]"
    />
    <div class="flex flex-col items-start gap-3">
      <TagBase text="Learning" color-class="bg-yellow" />
      <div class="text-sm font-medium">Published 21 Dec 2023</div>
      <div class="cursor-pointer text-2xl font-extrabold hover:text-yellow">
        HTML & CSS foundations
      </div>
      <div class="font-medium text-gray">
        These languages are the backbone of every website, defining structure, content, and
        presentation.
      </div>
    </div>
    <div class="flex items-center gap-3">
      <UserAvatar image-url="/image-avatar.webp" />
      <div class="text-sm font-extrabold">Greg Hooper</div>
    </div>
  </div>
</template>
