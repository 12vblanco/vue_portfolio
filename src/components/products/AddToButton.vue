<template>
  <div v-if="props.product" class="add-to-wrapper">
    <div v-if="productQty < 1" class="row-div">
      <AddToCartIcon class="add-icon" @click="addToCart" scale="2.2"/>
    </div>
    <div v-else class="column-div" style="font-size: 2.6rem;">
      <div class="row-div">
        <span class="minus" @click="removeFromCart">-</span>
        <span class="plus" @click="addToCart">+</span>
      </div>
      <span class="qty" @click="props.handleShow">{{ productQty }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AddToCartIcon from "../../assets/svg/AddToCartIcon.vue";
import { useCart } from "../../utils/CartContext.js";


const props = defineProps({
  product: Object,
  handleShow: Function
});

const cart = useCart();
const productQty = computed(() => cart.getProductQty(props.product.id));

const addToCart = () => {
  cart.addOneToCart(props.product.id);
};

const removeFromCart = () => {
  cart.removeOneFromCart(props.product.id);
};
</script>

<style scoped>
.add-to-wrapper {
  width: 72px;
  height: 80px;
  margin: 6px 2px;
  cursor: pointer;
  z-index: 4;
  border-left: solid 0.1px rgba(51, 51, 51, 0.4);
}

.add-icon {
  color: var(--color-secondary);
  transition: all 0.2s linear;
  margin-top: -12px;
  width: 42px;
  height: 42px;
}

.add-icon:hover {
  font-size: 46px;
}

.column-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -16px;
}

.row-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.qty {
  font-size: 20px;
  margin-top: -0.2rem;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
}

.plus {
  font-size: 38px;
  margin: -6px 10px -14px 6px;
}

.minus {
  font-size: 38px;
  color: var(--color-accent);
  margin: -6px 8px -14px 12px;
}
</style>
