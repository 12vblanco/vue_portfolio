<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: auto;
  padding-top: 10%;
  font-size: 22px;
  margin-top: 110px;
  margin-bottom: 60px;
}

@media (max-width: 1440px) {
  .main-container {
    padding-top: 15%;
    justify-content: flex-start;
  }
}

@media (max-width: 1040px) {
  .main-container {
    margin-bottom: 1rem;
  }
}
</style>
