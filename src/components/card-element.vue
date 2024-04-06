<template>
  <div class="group rounded-md overflow-hidden">
    <router-link :to="`/games/${game.id}`">
      <div class="relative flex flex-col">
        <img :src="game.src" alt="game_gif" class="w-full aspect-video md:saturate-50 md:group-hover:saturate-100"/>
        <!--      DETAILS-->
        <div
            class="flex items-center gap-6 justify-start px-5 absolute bottom-0 w-full bg-black bg-opacity-70 h-[15%] md:h-[20%] text-white">
          <!--        DEVELOPER-->
          <div class="flex gap-2 items-center justify-center">
            <Users class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.users }}</p>
          </div>
          <!--        CREATED AT -->
          <div class="flex gap-2 items-center justify-center">
            <Clock class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.createdAt }}</p>
          </div>
          <!--        GAME ENGINE -->
          <div class="flex gap-2 items-center justify-center">
            <PencilRuler class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.engine }}</p>
          </div>
        </div>
      </div>
      <div class="bg-card flex flex-col gap-4 p-8">
        <div>
          <!--        TITLE-->
          <div class="flex items-center">
            <h1 class="text-xl truncate font-semibold md:text-2xl text-secondary group-hover:text-white">{{
                game.title
                                                                                                         }}</h1>
            <ChevronRight class="ml-auto text-secondary group-hover:text-white size-6 md:size-8"/>
          </div>
          <!--        SUBTITLE-->
          <h2 class="truncate text-base md:text-lg">{{ game.subtitle }}</h2>
        </div>
        <!--        DESCRIPTION-->
        <p class="text-xs md:text-sm">{{ game.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import {Users, Clock, PencilRuler, ChevronRight} from "lucide-vue-next";
import type {IGame} from "@/models/IGame";


const props = defineProps({
  game: {
    type: Object as () => IGame,
    required: true,
  },
});


</script>

<style scoped>

</style>