<template>
  <div class="footer-div">
    <div  class="div">
      <!-- <RouterLink to="/contact"> -->
        Tree Rings - {{ currentYear }} &copy;
        <span>&nbsp;&nbsp;</span>
      <!-- </RouterLink> -->
      <RouterLink to="/terms">
        Terms & conditions
        <span>&nbsp;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer-div {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-bg);
  color: var(--color-secondary);
  text-align: center;
  z-index: 234;
}

.div {
  padding: 0.4rem;
  background: var(--color-bg);
  font-size: 11px;
  font-weight: 500;
}

@media (max-width: 340px) {
  .div {
    font-size: 10px;
    padding: 0.4rem;
  }
}
</style>
