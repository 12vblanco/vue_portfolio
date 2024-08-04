<template>
  <div class="div">
    <h2>Thank you for submitting the form!</h2>
    <p class="text">We will get back to you soon.</p>
    <button class="contact-btn" @click="handleBackHome">Back to Home</button>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'Success',
  setup() {
    const handleBackHome = () => {
      window.location.href = '/';
    };

    onMounted(() => {
      const timer = setTimeout(() => {
        handleBackHome();
      }, 4000);

      return () => clearTimeout(timer);
    });

    return {
      handleBackHome,
    };
  },
};
</script>

<style scoped>
.div {
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
