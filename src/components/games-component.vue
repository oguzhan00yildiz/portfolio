<template>
  <div>
    <!--    TITLE-->
    <h2 class="text-transparent bg-gradient-to-r from-primary inline-block to-secondary bg-clip-text text-2xl md:text-3xl font-bold py-4">
      My Projects</h2>

    <!--    GAMES-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <card-element v-for="(game, index) in games" :key="index" :game="game"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardElement from "@/components/card-element.vue";
import {games} from "@/data/games";


</script>

<style scoped>

</style>