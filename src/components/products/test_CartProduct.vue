<template>
  <!-- Your component template here -->
</template>

<script>
import { mount } from '@vue/test-utils';
import CartProduct from '@/components/products/CartProduct.vue';

describe('CartProduct', () => {
  it('renders the product name correctly', () => {
    const wrapper = mount(CartProduct, {
      props: {
        id: '1',
        quantity: 2,
      },
      data() {
        return {
          productData: {
            name: 'Tree Rings Print',
            img: '/path/to/image.jpg',
            price: 9.99,
          },
        };
      },
    });

    expect(wrapper.find('.name').text()).toBe('Tree Rings Print');
  });

  it('renders the quantity correctly', () => {
    const wrapper = mount(CartProduct, {
      props: {
        id: '1',
        quantity: 2,
      },
      data() {
        return {
          productData: {
            name: 'Tree Rings Print',
            img: '/path/to/image.jpg',
            price: 9.99,
          },
        };
      },
    });

    expect(wrapper.find('.qty').text()).toBe('2 units');
  });

  it('renders the total price correctly', () => {
    const wrapper = mount(CartProduct, {
      props: {
        id: '1',
        quantity: 2,
      },
      data() {
        return {
          productData: {
            name: 'Tree Rings Print',
            img: '/path/to/image.jpg',
            price: 9.99,
          },
        };
      },
    });

    expect(wrapper.find('.price').text()).toBe('Price: £ 19.98');
  });

  it('calls removeFromCart method when delete button is clicked', () => {
    const removeFromCartMock = jest.fn();
    const wrapper = mount(CartProduct, {
      props: {
        id: '1',
        quantity: 2,
      },
      data() {
        return {
          productData: {
            name: 'Tree Rings Print',
            img: '/path/to/image.jpg',
            price: 9.99,
          },
        };
      },
      methods: {
        removeFromCart: removeFromCartMock,
      },
    });

    wrapper.find('.remove-button').trigger('click');

    expect(removeFromCartMock).toHaveBeenCalled();
  });
});
</script>

<style>
/* Your component styles here */
</style>