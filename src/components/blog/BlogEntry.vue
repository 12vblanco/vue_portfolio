<template>
  <div class="main-container">
    <div class="entry-container">
      <div class="img-col">
        <img :src="entry.image" :alt="entry.title" class="blog-image" />
      </div>
      <div class="text-col">
        <div class="blog-content">
          <h2 class="blog-title">{{ entry.title }}</h2>
          <h3 class="blog-subtitle">{{ entry.subtitle }}</h3>
          <p class="blog-date">{{ entry.date }}</p>
          <p class="blog-text">{{ entry.text }}</p>
          <div class="blog-tags">
            <span v-for="(tag, index) in entry.tags" :key="index" class="blog-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object 
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.entry-container {
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  background: #f1f4f4;
  border-radius: 8px;
}

.img-col
{
  padding: 15px;
  max-width: 34%;
}
.text-col {
  padding: 15px;
  max-width: 66%;
}

@media (max-width: 892px) {
  .img-col,
  .text-col {
    max-width: 100%;
  }
}

.blog-image {
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-bottom: 1rem;
}

@media (max-width: 892px) {
  .blog-image {
    width: 100%;
    height: auto;
  }
}

.blog-content {
  flex: 1;
}

.blog-title {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 26px;
}

@media (max-width: 890px) {
  .blog-title {
    margin-bottom: 6px;
    font-size: 24px;
  }
}

.blog-subtitle {
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: -0.4px;
}

@media (max-width: 890px) {
  .blog-subtitle {
    margin-bottom: 6px;
    font-size: 19px;
  }
}

.blog-date {
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
}

@media (max-width: 892px) {
  .blog-date {
    font-size: 13px;
  }
}

.blog-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

@media (max-width: 892px) {
  .blog-text {
    font-size: 16px;
  }
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
}

.blog-tag {
  font-size: 16px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

@media (max-width: 892px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 7px;
  }
}

@media (max-width: 562px) {
  .blog-tag {
    font-size: 13px;
    padding: 2px 6px;
  }
}
</style>
