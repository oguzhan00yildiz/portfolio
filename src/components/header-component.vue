<template>
  <nav
      class="sticky top-0 w-full px-4 pt-8 pb-4 bg-background z-50">
    <div class="flex items-start container gap-3 md:justify-between mx-auto flex-col md:flex-row">
      <!--    LEFT SIDE -->
      <div class="space-y-2">
        <h1 class="text-3xl md:text-5xl text-primary font-bold">Oğuzhan Yıldız</h1>
        <p class="text-sm md:text-lg text-primary tracking-wider">Game Programmer</p>
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
import {Linkedin, Github, Instagram, Gamepad2} from "lucide-vue-next";

</script>

<style scoped>

</style>