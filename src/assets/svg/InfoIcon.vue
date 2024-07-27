<template>
  <svg
    class="info"
    data-slot="icon"
    aria-hidden="true"
    fill="none"
    stroke-width="1.5"
    :stroke="strokeColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8.5" stroke-width="1.5" />
    <line x1="12" y1="12" x2="12" y2="16" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="12" cy="8" r="0.5" fill="none" stroke-width="1.5" />
  </svg>
</template>

<script>
export default {
  name: "InfoIcon",
  props: {
    strokeColor: {
      type: String,
      required: true,
      default: 'var(--color-secondary)'
    },
  },
};
</script>

<style scoped>
.info {
  position: absolute;
  margin: 16px;
  z-index: 1234;
  cursor: pointer;
  width: 42px;
  height: 42px;
}


</style>