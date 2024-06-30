<template>
  <MainContainer style="margin-bottom: 2rem; padding-top: 4px;">
    <StyledContainer style="margin-bottom: 2rem;">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <Product :product="product" :handleShow="handleShow" />
      </div>
    </StyledContainer>
  </MainContainer>
</template>

<script>
import { defineComponent } from 'vue';
import MainContainer from '../MainContainer.vue';
import StyledContainer from '../StyledContainer.vue';
import Product from '../products/Product.vue';
import { products } from '../products/Products.js';

export default defineComponent({
  name: 'HomePage',
  components: {
    MainContainer,
    StyledContainer,
    Product,
  },
  props: {
    handleShow: Function,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.products = products; 
  },
});
</script>

<style scoped>
ProductCard {
  margin: 6px 10px;
}
@media (max-width: 340px) {
  .product-card {
    margin: 6px 0;
  }
}
</style>
