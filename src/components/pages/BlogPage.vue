<template>
  <MainContainer style="margin-top: 150px;">
      <div v-for="(entry, index) in blogEntries" :key="index" class="blog-entry-card">
        <BlogEntry :entry="entry" />
      </div>
  </MainContainer>
</template>

<script>
import MainContainer from '../MainContainer.vue';
import StyledContainer from '../StyledContainer.vue';
import { blogEntries } from '../blog/BlogEntries.js';
import BlogEntry from '../blog/BlogEntry.vue';

export default {
  name: 'BlogPage',
  components: {
    MainContainer,
    StyledContainer,
    BlogEntry
  },
  props: {
    // scrollToTop: {
    //   type: Function,
    //   required: true
    // }
  },
  // mounted() {
  //   this.scrollToTop();
  // },
  data() {
    return {
      blogEntries: blogEntries
    };
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.styled-container {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  background: #f1f4f4;
  border-radius: 8px;
}

.blog-entry-card {
  margin-bottom: 20px ;
}
</style>
