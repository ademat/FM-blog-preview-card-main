<script setup lang="ts">
import TagBase from './TagBase.vue'
import UserAvatar from './UserAvatar.vue'
</script>

<template>
  <article
    class="shadow-small flex w-[327px] flex-col items-start gap-6 rounded-large border border-black bg-white p-6 hover:shadow-large sm:w-96"
  >
    <img
      src="@/assets/illustration-article.svg"
      class="h-[200px] w-[279px] rounded-medium object-cover sm:w-[336px]"
      alt="Illustration article"
    />
    <div class="flex flex-col items-start gap-3">
      <TagBase text="Learning" color-class="bg-yellow" />
      <div class="text-xs font-medium sm:text-sm">Published 21 Dec 2023</div>
      <h1 class="cursor-pointer text-xl font-extrabold hover:text-yellow sm:text-2xl">
        HTML & CSS foundations
      </h1>
      <div class="text-sm font-medium text-gray sm:text-base">
        These languages are the backbone of every website, defining structure, content, and
        presentation.
      </div>
    </div>
    <div class="flex items-center gap-3">
      <UserAvatar image-url="/image-avatar.webp" />
      <div class="text-sm font-extrabold">Greg Hooper</div>
    </div>
  </article>
</template>
