<template>
  <nav
      class="sticky top-0 w-full px-4 pt-4 md:pt-8 pb-4 bg-background z-50">
    <div class="flex items-start max-w-screen-xl md:px-12 gap-3 md:justify-between mx-auto flex-col md:flex-row">
      <!--    LEFT SIDE -->
      <div class="">
        <router-link to="/">
          <h1 class="text-3xl h-10 md:h-14 md:text-5xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold">
            Oğuzhan Yıldız</h1>
        </router-link>
        <p class="text-sm md:text-lg text-primary ">Game Programmer</p>
      </div>
      <!--    RIGT SIDE -->
      <div class="flex text-secondary items-center gap-1">
        <a href="https://www.linkedin.com/in/oguzhan00yildiz/" target="_blank">
          <Linkedin class="size-8 md:size-10 hover:text-white transition-colors duration-150"/>
        </a>
        <a href="https://github.com/oguzhan00yildiz" target="_blank">
          <Github class="size-8 md:size-10 hover:text-white transition-colors duration-150"/>
        </a>
        <a href="https://www.instagram.com/oguzhan0yildiz/" target="_blank">
          <Instagram class="size-8 md:size-10 hover:text-white transition-colors duration-150"/>
        </a>
        <a href="https://oguzhan00yildiz.itch.io/" target="_blank">
          <Gamepad2 class="size-8 md:size-10 hover:text-white transition-colors duration-150"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {Gamepad2, Github, Instagram, Linkedin} from "lucide-vue-next";
</script>

<style scoped>

</style>