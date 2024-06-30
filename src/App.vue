<template>
  <div id="app">
    <Navbar :handleToggle="handleToggle" :isOpen="isOpen" />
    <RouterView />
        <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Footer from './components/footer/Footer.vue';
import Navbar from './components/navbar/Navbar.vue';
import { useProvideCart } from './utils/CartContext';

const isOpen = ref(false);
const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

useProvideCart();
</script>

<style>
@import "./assets/styles/App.css";
</style>
