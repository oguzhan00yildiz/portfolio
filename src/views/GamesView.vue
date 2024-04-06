<template>
  <div class="flex flex-col gap-3 md:gap-4 max-w-screen-xl md:px-12 mx-auto px-4 pb-6 md:pb-8">
    <!--    GO BACK BUTTON -->
    <router-link class="text-secondary my-2 md:my-0 md:text-xl hover:text-white flex items-center space-x-1" to="/">
      <ChevronLeft class="md:size-10"/>
      <p>Go Back</p>
    </router-link>

    <!--  GAME SECTION -->
    <div v-if="game">
      <!--    GAME GIF-->
      <div class="relative">
        <img :alt="game.title" :src="game.src" class="w-full aspect-video">
        <div
            class="flex items-center gap-6 justify-start px-5 absolute bottom-0 w-full bg-black bg-opacity-70 h-[15%] text-white">
          <p class="text-xl md:text-3xl font-bold text-primary">
            {{ game.title }}
          </p>
        </div>
      </div>
    </div>

    <!--    ABOUT AND PROJECT INFO-->
    <div v-if="game" class="flex flex-col md:flex-row gap-3 md:gap-4">
      <!--      ABOUT-->
      <div class="bg-card p-4 flex-1 space-y-4 rounded-md ">
        <h2 class="text-lg md:text-2xl font-semibold md:my-4">About</h2>
        <p class="text-sm md:text-base">{{ game.details.about }}</p>
      </div>
      <!--      PROJECT INFO -->
      <div class="bg-card p-4 flex-1 space-y-4 rounded-md">
        <h2 class="text-lg md:text-2xl font-semibold md:my-4">Project Info</h2>
        <div class="flex flex-col gap-2 md:gap-4">
          <ul class="space-y-2">
            <!--            ROLE-->
            <li class="flex items-center gap-1 md:gap-3 text-sm md:text-base truncate">
              <User class="size-5 md:size-6"/>
              Role : {{ game.role }}
            </li>
            <!--            TEAM SIZE-->
            <li class="flex items-center gap-1 md:gap-3 text-sm md:text-base truncate">
              <Users class="size-5 md:size-6"/>
              Team Size : {{ game.users }}
            </li>
            <!--            TIME FRAME-->
            <li class="flex items-center gap-1 md:gap-3 text-sm md:text-base truncate">
              <Clock class="size-5 md:size-6"/>
              Time frame : {{ game.createdAt }}
            </li>
            <!--            ENGINE-->
            <li class="flex items-center gap-1 md:gap-3 text-sm md:text-base truncate">
              <PencilRuler class="size-5 md:size-6"/>
              Engine : {{ game.engine }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--    INTRODUCTION-->
    <div v-if="game">
      <h2 class="text-white text-xl md:text-2xl font-bold py-4">Introduction</h2>
      <p class="text-sm md:text-base">{{ game.details.introduction }}</p>
    </div>

    <!--    GIFS-->
    <div v-if="game"
         :class="`grid grid-cols-1 md:grid-cols-${game.details.gifs.length} grid-flow-row auto-rows-fr gap-4`">
      <img v-for="gif in game.details.gifs" :src="gif" alt="game-gif" class="rounded-md aspect-video md:size-full">
    </div>

    <!--    WHAT I LEARNED-->
    <div v-if="game">
      <h2 class="text-white text-xl md:text-2xl font-bold py-4">What I learned</h2>
      <p class="text-sm md:text-base">{{ game.details.whatILearned }}</p>
    </div>


    <!--    FOOTER GIFS-->
    <div v-if="game"
         :class="`grid grid-cols-1 md:grid-cols-${game.details.gifsFooter.length} grid-flow-row auto-rows-fr gap-4`">
      <img v-for="gif in game.details.gifsFooter" :src="gif" alt="game-gif"
           class="rounded-md aspect-video md:size-full">
    </div>

  </div>
</template>

<script lang="ts" setup>
import {User, Users, Clock, PencilRuler, ChevronRight, ChevronLeft} from "lucide-vue-next";
import {games} from "@/data/games";
import {useRoute} from "vue-router";
import type {IGame} from "@/models/IGame";
import {ref} from "vue";

const route = useRoute();
const game = ref<IGame | null>(null);


const gameId = route.params.id;


game.value = games.find(g => g.id === gameId) || null;


</script>

<style scoped>
</style>