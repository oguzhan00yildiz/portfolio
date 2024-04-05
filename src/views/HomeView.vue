<template>
  <main class="flex flex-col gap-6 md:gap-8 max-w-screen-xl md:px-12 mx-auto px-4 pb-6 md:pb-8">
    <!--    AVATAR AND DESCRIPTION-->
    <HeroComponent/>
    <!--    MY PROJECTS-->
    <GamesComponent/>
    <!--    EDUCATION -->
    <EducationComponent/>
  </main>
</template>


<script lang="ts" setup>
import HeroComponent from "@/components/hero-component.vue";
import GamesComponent from "@/components/games-component.vue";
import EducationComponent from "@/components/education-component.vue";
</script>
