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

  </div>
</template>

<script lang="ts" setup>
import {ChevronLeft} from "lucide-vue-next";
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