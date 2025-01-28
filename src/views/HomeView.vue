<template>
  <main class="flex flex-col gap-4 md:gap-6 max-w-screen-xl px-4 md:px-8 mx-auto pb-6 md:pb-8">
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
