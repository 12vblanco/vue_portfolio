<template>
  <div class="main-container">
    <div class="form-container">
      <h2>Please send us any requests or queries using this form:</h2>
      <form
        id="contactForm"
        name="contactForm"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        @submit.prevent="onSubmitHandler"
      >
        <input type="hidden" name="form-name" value="contactForm" />

        <label for="name">
          Your name
          <input id="name" type="text" name="name" />
        </label>

        <label for="email">
          Your email
          <span style="color: var(--color-accent); font-size: 28px;">*</span>
          <input id="email" type="email" name="email" required />
        </label>

        <label for="message">
          Message
          <span style="color: var(--color-accent); font-size: 28px;">*</span>
          <textarea id="message" name="message"></textarea>
        </label>

        <label>
          <div style="display: flex; align-items: center;">
            <input id="agree" type="checkbox" name="agree" required />
            <span class="check-text">
              I am happy to receive emails regarding this message & according to the
              <a href="/terms" target="_blank">Terms & Conditions</a>
              <span style="color: var(--color-accent); font-size: 16px;">*</span>
            </span>
          </div>
        </label>

        <input type="submit" value="Send a message" class="input-button" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  setup() {
    const onSubmitHandler = (e) => {
      e.preventDefault();

      let myForm = document.getElementById('contactForm');
      let formData = new FormData(myForm);
      console.log('Form Data: ', Object.fromEntries(formData));

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          console.log('Form submission successful');
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          alert(error);
        });
    };

    return {
      onSubmitHandler,
    };
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-top: -130px;
}

@media (max-width: 440px) {
  .form-container {
    max-width: 100%;
    padding: 1rem;
    margin-top: -100px;
  }
}

h2 {
  margin-bottom: 1rem;
}

label {
  font-size: 18px;
  width: 100%;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 0.5px dotted #333;
  font-size: 16px;
  margin-top: 2px;
}

textarea {
  height: 140px;
  resize: vertical;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.input-button {
  border-radius: 4px;
  border: 1.6px solid #333;
  font-weight: 500;
  margin-top: 20px;
  font-size: 18px;
  padding: 0.4rem 0.6rem;
  position: relative;
  left: 50%;
  width: 180px;
  transform: translate(-50%);
  background: var(--color-primary);
  cursor: pointer;
  transition: box-shadow 0.5s;
}

.input-button:hover {
  box-shadow: 5px 2rem 30px rgba(0, 0, 0, 0.2);
}
.input-button:active {
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
}

.check-text{
  text-align: left;
  font-size: 14px;
  line-height: 1.2;
  width: 100%;
  padding-left: .1rem;
  padding-top: 1rem;
  margin-top: -5px;
  @media (max-width: 440px) {
    font-size: 11px;
    padding-left: 0.8em;
  }
}
</style>
