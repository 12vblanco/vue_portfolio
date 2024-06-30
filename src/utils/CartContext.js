import { inject, provide, reactive, readonly } from "vue";
import { getProductData } from "../components/products/Products.js";

const CartSymbol = Symbol();

export function useProvideCart() {
  const state = reactive({
    items: [],
  });

  const getProductQty = (id) => {
    const product = state.items.find((product) => product.id === id);
    return product ? product.quantity : 0;
  };

  const addOneToCart = (id) => {
    console.log("Adding to cart:", id);
    const product = state.items.find((product) => product.id === id);
    if (product) {
      product.quantity += 1;
    } else {
      state.items.push({ id, quantity: 1 });
    }
    console.log("Cart after adding:", [...state.items]);
  };

  const removeOneFromCart = (id) => {
    console.log("Removing one from cart:", id);
    const product = state.items.find((product) => product.id === id);
    if (product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter((product) => product.id !== id);
      }
    }
    console.log("Cart after removing one:", [...state.items]);
  };

  const deleteFromCart = (id) => {
    console.log("Deleting from cart:", id);
    state.items = state.items.filter((product) => product.id !== id);
    console.log("Cart after deleting:", [...state.items]);
  };

  const getTotalCost = () => {
    return state.items.reduce((total, product) => {
      const productData = getProductData(product.id);
      return total + productData.price * product.quantity;
    }, 0);
  };

  const cart = {
    get items() {
      return [...state.items];
    },
    getProductQty,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  provide(CartSymbol, readonly(cart));

  return cart;
}

export function useCart() {
  const cart = inject(CartSymbol);
  if (!cart) {
    throw new Error("No cart provided!");
  }
  return cart;
}
