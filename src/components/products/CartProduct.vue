<template>
  <div v-if="productData">
    <div class="row-div" style="margin-top: 0.75rem;">
      <img class="img" :alt="'A print of the rings of a tree'" :src="productData.img" />
      <div class="column-div">
        <p class="name">{{ productData.name }}</p>
        <div class="qty-div">
          <h3 class="qty">
            {{ quantity }}
            <span>{{ quantity > 1 ? ' units' : ' unit' }}</span>
          </h3>
        </div>
        <h3 class="price">
          Price: £ {{ (quantity * productData.price).toFixed(2) }}
          <button class="remove-button" @click="removeFromCart">
            Delete
          </button>
        </h3>
      </div>
    </div>
    <hr style="margin-top: 1rem;">
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCart } from '../../utils/CartContext';
import { getProductData } from './Products';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cart = useCart();

const productData = computed(() => getProductData(props.id));

const removeFromCart = () => {
  cart.deleteFromCart(props.id);
};
</script>

<style scoped>
.remove-button {
  color: var(--color-accent);
  background: var(--color-bg);
  padding: 0.125rem 0.25rem;
  margin-left: 1rem; /* Adjusted margin for better alignment */
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid var(--color-accent);
  transition: all 0.3s;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
}

.remove-button:hover {
  box-shadow: 0.1rem 0.3rem 1rem rgba(3, 3, 3, 0.4);
}

.remove-button:active {
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(3, 3, 3, 0.4);
}

.name {
  letter-spacing: -0.03rem;
  font-size: 0.9375rem;
  font-style: italic;
  font-weight: 500;
}

.qty {
  font-size: 0.9375rem;
  font-weight: 400;
}

.qty span {
  color: var(--color-secondary);
  font-size: 0.9375rem;
}

.price {
  color: var(--color-secondary);
  font-size: 0.9375rem;
  font-weight: 400;
}

.img {
  max-width: 60px;
  border-radius: 6px;
}

.row-div {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-top: 0.75rem;
}

.column-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
}
</style>
