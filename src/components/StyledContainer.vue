<template>
  <div class="styled-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'StyledContainer',
};
</script>

<style scoped>
.styled-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .styled-container {
    padding-top: 0;
  }
}
</style>
