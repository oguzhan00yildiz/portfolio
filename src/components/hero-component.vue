<template>
  <div class="flex flex-col items-center gap-20 pt-8 relative md:justify-around">
    <div class="flex-shrink-0 size-[200px] md:size-[240px] overflow-hidden ring-4 ring-secondary rounded-full">
      <button @click="handleImageClick">
        <img alt="avatar"
             ref="imageAvatar"
             class="size-full object-cover transition-transform duration-200"
             src="/img/avatar.jpg">
      </button>
    </div>
    <p
      class="py-1 text-xl md:text-2xl xl:text-4xl text-center text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-light inline-block">
      Game programmer. Studying at JAMK University in Finland to turn his hobby into a profession who likes working in
      organized settings, enjoys working hard, and is good at being a flexible team player, handling challenges with
      humor.
    </p>
    <ChevronDown class="size-10 md:size-14 animate-bounce shrink-0" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const imageAvatar = ref<HTMLImageElement | null>(null)

const handleImageClick = () => {
  if (imageAvatar.value) {
    imageAvatar.value.classList.add('scale-150')
    imageAvatar.value.classList.add('translate-y-6')
  } else {
    console.warn('Image element not found.')
  }
}
</script>

<style scoped>

</style>