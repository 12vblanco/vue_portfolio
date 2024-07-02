<template>
   <MainContainer>
    <div class="about-container">
      <Form />
    </div>
  </MainContainer>
</template>

<script>
import Form from '../../components/contact/Form.vue';
import MainContainer from '../MainContainer.vue';
import StyledContainer from '../StyledContainer.vue';

export default {
  name: 'ContactPage',
  components: {
    MainContainer,
    StyledContainer,
    Form
  },

};
</script>

<style scoped>
.about-container {
  max-width: 100rem;
  height: auto;
  padding: 1.25rem;
  margin: 0 auto;
}
</style>
