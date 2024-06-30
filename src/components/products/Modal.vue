<template>
  <div class="modal-wrapper">
    <div class="modal-header" :style="headerStyle">
      <p v-if="cartItemsCount > 0">Your basket:</p>
      <p v-else>Your cart is empty</p>
      <div class="close">
        <OhVueIcon name="io-close-outline" @click="props.handleClose" />
      </div>
    </div>
    <template v-if="cartItemsCount > 0">
      <div>
        <CartProduct
          v-for="item in cartItems"
          :key="item.id"
          :id="item.id"
          :quantity="item.quantity"
        />
      </div>
      <div class="row-checkout">
        <div style="display: flex; align-items: center;">
          <img
            :src="stripe_img"
            style="width: 60px; height: 28px; margin-right: 17px; border-radius: 12px;"
            alt="Stripe"
          />
          <p>
            Total:
            <span style="font-weight: 500;">
              £{{ totalCost.toFixed(2) }}
            </span>
          </p>
        </div>
        <button class="checkout-button" @click="checkout">Checkout</button>
      </div>
    </template>
    <template v-else>
      <h5 @click="goToHome">
        Click
        <OhVueIcon
          name="md-addshoppingcart-outlined"
        />
        to add items
      </h5>
    </template>
  </div>
</template>

<script setup>
import { addIcons } from "oh-vue-icons";
import { IoCloseOutline, MdAddshoppingcartOutlined } from "oh-vue-icons/icons";
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import stripe_img from '../../assets/images/stripe_logo.png';
import { useCart } from '../../utils/CartContext';
import CartProduct from "./CartProduct.vue";

addIcons(IoCloseOutline, MdAddshoppingcartOutlined);

const props = defineProps({
  handleClose: {
    type: Function,
    required: true
  }
});

const router = useRouter();
const cart = useCart();

const cartItems = computed(() => {
  console.log('Computing cartItems:', cart.items);
  return [...cart.items]; 
});

const cartItemsCount = computed(() => cartItems.value.length);

const totalCost = computed(() => {
  const cost = cart.getTotalCost();
  console.log('Computing totalCost:', cost);
  return cost;
});

const headerStyle = computed(() => ({
  borderBottom: cartItemsCount.value > 0 ? '1px solid #333' : 'none',
}));

const checkout = async () => {
  try {
    const response = await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems.value }),
    });
    const data = await response.json();
    if (data.url) {
      window.location.assign(data.url);
    }
  } catch (error) {
    console.error('Checkout error:', error);
  }
};

const goToHome = () => {
  router.push('/');
};

watch(cartItemsCount, (newCount, oldCount) => {
  if (newCount === 0) {
    // setTimeout(() => {
    //   props.handleClose();
    // }, 2000);
  }
});

watch(() => cart.items, () => {
}, { deep: true });
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  top: 110px;
  right: 0px;
  width: 340px;
  height: auto;
  max-height: 470px;
  font-size: 25px;
  padding: 1rem 1.4rem 0rem 1.4rem;
  border: solid 1.8px #333;
  border-right: none;
  background: var(--color-bg);
  z-index: 124;
  border-radius: 0.6rem 0 0 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 460px) {
  .modal-wrapper {
    width: 340px;
    font-size: 20px;
    padding-top: 8px;
    top: 140px;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.6rem;
  font-weight: 500;
}

.close {
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 4px;
}

@media (max-width: 460px) {
  .close {
    font-size: 30px;
  }
}

.row-checkout {
  position: sticky;
  bottom: 0px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg);
}

p {
  font-size: 14px;
}

.checkout-button {
  color: var(--color-secondary);
  background: var(--color-bg);
  padding: 0.2rem 0.4rem;
  margin-left: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 110;
  border: 2px solid #333;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
  transition: all 0.25s ease-out;
}

.checkout-button:hover {
  background: #333;
  color: var(--color-bg);
}



</style>
