<template>
    <svg
    class="close"
      data-slot="icon"
      aria-hidden="true"
      fill="none"
      :stroke="strokeColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M18 6L6 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    strokeColor: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
.close{
  
}
  </style>
  