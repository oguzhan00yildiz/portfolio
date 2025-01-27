<script lang="ts" setup>
import {RouterView, useRoute} from "vue-router";
import HeaderComponent from "@/components/header-component.vue";
import FooterComponent from "@/components/footer-component.vue";
import { computed } from "vue";

const route = useRoute();
const showFooter = computed(() => route.name !== 'games');
</script>

<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent v-if="showFooter"/>
</template>
<style scoped>
</style>
