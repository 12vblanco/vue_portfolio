<template>
  <div>
    <div class="styled-div">
      <RouterLink to="/" >
        <div class="logo-div">
          <img :src="logo" alt="tree rings's logo" />
          <h1 class="name">Tree Rings</h1>
        </div>
      </RouterLink>
      <div class="nav-div">
        <ul class="nav-ul">
          <NavMenu
            v-if="isDesktop"
            :isDesktop="isDesktop"
            :show="show"
            @closeMenu="handleClose"
            @showMenu="handleShow"
          />
          <BurgerMenu
            v-else
            :isDesktop="isDesktop"
            :show="show"
            @closeMenu="handleClose"
            @showMenu="handleShow"
          />
        </ul>
      </div>
    </div>
    <Modal 
      v-show="show && productsCount > 0" 
      :handleClose="handleClose"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import logo from '../../assets/images/logo.png';
import { useCart } from '../../utils/CartContext';
import Modal from '../products/Modal.vue';
import BurgerMenu from './BurgerMenu.vue';
import NavMenu from './NavMenu.vue';

const cart = useCart();
const productsCount = computed(() =>
  cart.items.reduce((sum, product) => sum + product.quantity, 0)
);
const show = ref(false);
const isDesktop = ref(window.innerWidth > 1140);

const handleShow = () => {
  show.value = true;
};

const handleClose = () => {
  show.value = false;
};

const updateNavMenu = () => {
  isDesktop.value = window.innerWidth > 1140;
};

onMounted(() => {
  window.addEventListener('resize', updateNavMenu);
  if (productsCount.value > 0) {
    handleShow();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateNavMenu);
});

watch(productsCount, (newCount) => {
  if (newCount > 0 && !show.value) {
    handleShow();
  } else if (newCount === 0 && show.value) {
    handleClose();
  }
});
</script>

<style scoped>
.styled-div {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  width: 100vw;
  height: 110px;
  max-width: 140rem;
  align-items: center;
  justify-content: space-evenly;
  z-index: 123;
  background: var(--color-bg);
}

.logo-div {
  display: flex;
  margin-left: 2.75rem;
  height: 5.75rem;
  align-items: center;
  justify-content: space-around;
}

.nav-div {
  display: flex;
  height: 92px;
  align-items: center;
  justify-content: space-around;
}

.nav-ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
}

img {
  width: 60px;
}

.name {
  margin-left: 1rem;
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-bottom: 0;
}
</style>
