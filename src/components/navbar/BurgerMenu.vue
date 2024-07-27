<template>
  <div>
    <div class="burger-div" @click="clickHandler">
      <div class="menu-icon">
        <component :is="click ? CloseIcon : BurgerMenuIcon" class="icon" />
        <span v-if="productsCount > 0" class="counter">{{ productsCount }}</span>
      </div>
    </div>
    <div class="overlay-menu" :class="{ show: click }">
      <NavMenu v-if="click" :closeMenu="closeMenu" :handleShow="handleShow" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BurgerMenuIcon from '../../assets/svg/BurgerMenuIcon.vue';
import CloseIcon from '../../assets/svg/CloseIcon.vue';
import { useCart } from '../../utils/CartContext.js';
import NavMenu from './NavMenu.vue';

const props = defineProps({
  handleShow: Function,
  closeMenu: Function,
});

const cart = useCart();
const productsCount = computed(() =>
  cart.items.reduce((sum, product) => sum + product.quantity, 0)
);

const click = ref(false);
const clickHandler = () => {
  click.value = !click.value;
};
const closeMenu = () => {
  click.value = false;
};
</script>

<style scoped>
.burger-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 4%;
}
.menu-icon {
  position: relative;
  margin-bottom: 14px;
}
.overlay-menu {
  position: fixed;
  top: 110px;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  padding-top: 12vh;
  background-color: var(--color-bg);
  z-index: 22999;
}
.overlay-menu.show {
  transform: translateX(0);
}
.counter {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: var(--color-accent);
  padding: 1px;
  top: -18px;
  right: -12px;
}
.icon {
  width: 40px;
  height: 40px;
}
</style>