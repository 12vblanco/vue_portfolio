<template>
  <div class="success-payment">
    <h2>Thank you for payment!</h2>
    <p class="text">We will be in touch soon.</p>
    <button class="contact-btn" @click="handleBackHome">Go Back!</button>
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

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<style scoped>
.success-payment {
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

.contact-btn {
  display: flex;
  background: var(--blue);
  border: 1px solid var(--blue);
  border-radius: 2px;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--white);
  width: 110px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
}

.contact-btn:hover {
  background: rgba(40, 98, 150, 1);
}
</style>