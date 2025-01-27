<template>
  <main class="flex flex-col gap-4 md:gap-6 max-w-screen-xl md:px-12 mx-auto px-4 pb-6 md:pb-8">
    <!--    AVATAR AND DESCRIPTION-->
    <HeroComponent class="mt-9"/>
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
