<template>
  <div class="flex flex-col md:flex-row items-center  gap-12 pt-8 md:pb-[240px] justify-between">
    <div class="flex-shrink-0 size-[240px] overflow-hidden ring-4 ring-secondary group rounded-full">
      <button @click="handleScroll">
        <img alt="avatar"
             class="size-full object-cover group-active:scale-125 group-active:translate-y-6 group-hover:scale-125 group-hover:translate-y-6 transition-transform duration-200"
             src="/img/avatar.jpg">
      </button>
    </div>
    <p class="text-2xl md:text-left text-center text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text  md:text-4xl font-light inline-block">
      Game programmer. Studying at JAMK University in Finland to turn his hobby into a profession who likes working in
      organized settings, enjoys working hard, and is good at being a flexible team player, handling challenges with
      humor.
    </p>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const targetRef = ref<HTMLParagraphElement | null>(null);


const handleScroll = () => {
  const el = document.getElementById("footer");
  el!.scrollIntoView({behavior: "smooth"});
};

</script>

<style scoped>

</style>