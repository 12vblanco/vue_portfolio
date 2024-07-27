<template>
  <svg
    class="burger"
    data-slot="icon"
    aria-hidden="true"
    fill="none"
    :stroke="strokeColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M3 12H21" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  strokeColor: {
    type: String,
    required: true,
    default: 'var(--color-secondary)'
  }
});
</script>

<style scoped>
.burger{

}
</style>
