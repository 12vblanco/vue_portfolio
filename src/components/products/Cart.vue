<template>
  <div class="shopping-div" @click="handleShow">
    <AddToCartIcon class="icon"/>
    <span class="counter">{{ productsCount }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AddToCartIcon from "../../assets/svg/AddToCartIcon.vue";
import { useCart } from '../../utils/CartContext';


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

.icon{
  width: 42px;
  height: 42px;
}

</style>