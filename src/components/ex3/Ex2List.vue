<template>
  <ul>
    <li v-for="s in stores" :key="s.sno">
      {{ s }}
    </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue';

const stores = inject('stores');

</script>

<style scoped> </style>
