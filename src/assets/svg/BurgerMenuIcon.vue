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
    <path
      d="M6 18 18 6M6 6l12 12"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
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
