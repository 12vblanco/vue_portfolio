<template>
    <div class="error-payment">
      <h2>Something went wrong with the payment</h2>
      <p class="text">Please try again, or get in touch.</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleBackHome = () => {
    router.push('/');
  };
  
  let timer;
  
  onMounted(() => {
    timer = setTimeout(() => {
      router.push('/');
    }, 4000);
  });

  </script>
  
  <style scoped>
  .error-payment {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    border-bottom: solid 1px #000;
    border-right: solid 1px #000;
  }
  
  .text {
    margin-bottom: 44px;
    font-weight: 500;
  }

  </style>