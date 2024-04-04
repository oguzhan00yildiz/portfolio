<template>
  <div>
    <!--    TITLE-->
    <h2 class="text-accent text-2xl md:text-4xl font-bold py-4">My Projects</h2>

    <!--    GAMES-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <card-element v-for="(game, index) in games" :key="index" :game="game"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardElement from "@/components/card-element.vue";
import type {IGame} from "@/models/IGame";

const games: IGame[] = [
  {
    id: "1",
    title: "Game 1",
    subtitle: "Subtitle 1",
    description: "Description for Game 1",
    users: 1000,
    createdAt: "3 Weeks",
    engine: "Unity",
    src: "/gifs/mario.gif",
  },
  {
    id: "2",
    title: "Game 2",
    subtitle: "Subtitle 2",
    description: "Description for Game 2",
    users: 500,
    createdAt: "3 Weeks",
    engine: "Unreal Engine",
    src: "/gifs/mario.gif",
  },
  {
    id: "3",
    title: "Game 3",
    subtitle: "Subtitle 3",
    description: "Description for Game 3",
    users: 500,
    createdAt: "3 Weeks",
    engine: "Unreal Engine",
    src: "/gifs/mario.gif",
  },

];


</script>

<style scoped>

</style>