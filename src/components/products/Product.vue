<template>
  <div class="productWrapper">
    <div @click="clickHandler">
      <InfoIcon :strokeColor="isDarkBg(product.name) ? 'var(--color-primary)' : 'var(--color-secondary)'" />
      <div v-if="showInfo" class="description" v-html="product.description"></div>
      <img :src="product.img" alt="A print of tree rings" class="img"/>
    </div>
    <div style="padding-top: 50px; display: flex;">
      <div class="column-div">
        <h2 class="name">{{ product.name }}</h2>
        <div class="row-div">
          <h4 class="format">{{ product.format }}</h4>
          <span class="price">£{{ product.price }}</span>
        </div>
      </div>
      <AddToButton 
        :product="product" 
        :handle-show="handleShow"
        @mounted="logAddToButtonMounted">
      </AddToButton>   
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import InfoIcon from '../../assets/svg/InfoIcon.vue';
import AddToButton from './AddToButton.vue';

export default defineComponent({
  name: 'Product',
  components: {
    AddToButton,
    InfoIcon,
  },
  
  props: {
    handleShow: Function,
    product: Object,
  },
  setup(props) {
    const showInfo = ref(false);

    const clickHandler = () => {
      showInfo.value = !showInfo.value;
      setTimeout(() => {
        showInfo.value = false;
      }, 3000);
    };

    const logAddToButtonMounted = () => {
      console.log('AddToButton mounted. Product:', props.product);
    };

    const isDarkBg = (productName) => {
      return productName === 'Fraxinus excelsior A4'; 
    };

    return {
      showInfo,
      clickHandler,
      handleShow: props.handleShow, 
      logAddToButtonMounted,
      isDarkBg,
    };
  },
});
</script>

<style scoped>
.productWrapper {
  width: 340px;
  height: 530px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
}
.productWrapper:hover {
  transform: scale(1);
  box-shadow: 5px 2rem 30px rgba(0, 0, 0, 0.2);
}
@media (max-width: 340px) {
  .productWrapper {
    width: 280px;
    height: 450px;
  }
}

.description {
  width: 340px;
  height: 450px;
  min-width: 340px;
  min-height: 450px;
  background: rgba(238, 238, 237, 0.9);
  position: absolute;
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 500;
  padding: 60px 20px;
  color: var(--color-secondary);
  transition: all 1s;
  border-radius: 4px 4px 0 0;
  white-space: pre-wrap;
}
@media (max-width: 340px) {
  .description {
    font-size: 15px;
    width: 260px;
    height: 430px;
    min-width: 280px;
    min-height: 450px;
  }
}

.img {
  border-radius: 4px 4px 0 0;
  width: 100%;
  margin-bottom: -52px;
  cursor: pointer;
}

.row-div {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}

.column-div {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  width: 100%;
}

.name {
  letter-spacing: -0.3px;
  font-size: 20.5px;
  font-style: italic;
  font-weight: 500;
  z-index: 123;
}
@media (max-width: 340px) {
  .name {
    font-size: 18px;
  }
}

.format {
  font-size: 16px;
  font-weight: 100;
  margin-top: -6px;
  z-index: 123;
}
@media (max-width: 340px) {
  .format {
    font-size: 13px;
  }
}

.price {
  font-size: 18px;
  color: var(--color-accent);
  position: relative;
  font-weight: 500;
  top: -3px;
  margin-left: 4px;
}
@media (max-width: 340px) {
  .price {
    font-size: 16px;
  }
}
</style>
