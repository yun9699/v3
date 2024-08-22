
<template>
  <div>
    <button @click="() => handleClick('s0.json')">S0</button>
    <button @click="() => handleClick('s1.json')">S1</button>
    <button @click="() => handleClick('s2.json')">S2</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const handleClick = inject('handleClick');

</script>

<style scoped> </style>
