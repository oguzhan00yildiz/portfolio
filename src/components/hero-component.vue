<template>
  <div class="flex flex-col items-center gap-20 pt-8 md:pb-[240px] h-screen md:justify-around">
    <div class="flex-shrink-0 size-[200px] md:size-[240px] overflow-hidden ring-4 ring-secondary group rounded-full">
      <button @click="handleScroll">
        <img alt="avatar"
             class="size-full object-cover group-active:scale-125 group-active:translate-y-6 group-hover:scale-125 group-hover:translate-y-6 transition-transform duration-200"
             src="/img/avatar.jpg">
      </button>
    </div>
    <p class="text-2xl text-center text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text  md:text-4xl font-light inline-block">
      Game programmer. Studying at JAMK University in Finland to turn his hobby into a profession who likes working in
      organized settings, enjoys working hard, and is good at being a flexible team player, handling challenges with
      humor.
    </p>
    <ChevronDown class="size-10 md:size-14 animate-bounce shrink-0"/>
  </div>
</template>

<script lang="ts" setup>
import {ChevronDown} from "lucide-vue-next";
import {ref} from "vue";

const targetRef = ref<HTMLParagraphElement | null>(null);


const handleScroll = () => {
  const el = document.getElementById("footer");
  el!.scrollIntoView({behavior: "smooth"});
};

</script>

<style scoped>

</style>