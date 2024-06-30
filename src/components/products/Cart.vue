<template>
  <div class="shopping-div" @click="handleShow">
    <OhVueIcon name="md-addshoppingcart-outlined" scale="2"/>
    <span class="counter">{{ productsCount }}</span>
  </div>
</template>

<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdAddshoppingcartOutlined } from "oh-vue-icons/icons";
import { computed } from 'vue';
import { useCart } from '../../utils/CartContext';

addIcons(MdAddshoppingcartOutlined);

const props = defineProps({
  handleShow: Function,
});

const cart = useCart();

const productsCount = computed(() => 
  cart.items.reduce((sum, product) => sum + product.quantity, 0)
);
</script>

<style scoped>
.shopping-div {
  display: flex;
  position: relative;
  padding-bottom: 32px;
}

.shopping-div :deep(svg) {
  margin-top: 52px;
  width: 100px;
  margin-left: 1rem;
  position: relative;
}

@media (max-width: 646px) {
  .shopping-div :deep(svg) {
    font-size: 44px;
  }
}

.counter {
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
  position: absolute;
  top: 40px;
  right: 12px;
}
</style>