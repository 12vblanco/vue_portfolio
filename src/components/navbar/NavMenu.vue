<template>
  <nav>
    <div class="styled-link" v-for="link in links" :key="link.name">
      <RouterLink :to="link.path" @click="closeMenu">{{ link.name }}</RouterLink>
    </div>
    <div :style="cartLinkStyle">
      <Cart :handleShow="handleShow" />
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Cart from "../products/Cart.vue";

const props = defineProps({
  handleShow: Function,
  closeMenu: Function,
  click: Boolean
});

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' }
]);

const cartLinkStyle = computed(() => ({
  marginLeft: props.click ? "-8px" : "-22px",
  marginTop: props.click ? "-46px" : "-14px",
  cursor: "pointer"
}));
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

@media (min-width: 1140px) {
  nav {
    flex-direction: row;
    justify-content: center;
  }
}

.styled-link {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 20px;
  font-weight: 400;
}

.styled-link:hover,
.router-link-active {
  color: var(--color-accent);
}
</style>