<template>
  <MainContainer>
    <div class="about-container">
      <div class="row">
        <div class="div-text-img">
          <img class="img" :src="images.roundImage" alt="Round wood image" />
        </div>
        <p class="bio-text">
          Before becoming a software developer, my professional life has always revolved around trees. <br />
          The structures and shapes of wood and the pathogens and conditions that affect and delimit its growth have always had an impact on me and at the end of 2019 I started printing these patterns in paper. <br /><br />
          All my work comes from diseased trees or trees with structural imperfections that must be felled for safety.
        </p>
      </div>

      <div class="div-text-img">
        <div class="row">
          <p class="bio-text">
            I rescue the wood from becoming firewood or ending up decomposed on the ground. In this way, the tree has a chance to leave a mark after its physical body has disappeared allowing us to appreciate its life history and the beauty within wood growth.<br />
          </p>
          <img class="img" :src="images.mapleImage" alt="Maple wood image" />
        </div>
      </div>

      <p class="bio-text">
        In my prints one can see the marks left by pathologies, age growth, the good years and those that lacked water or sunlight, the imprint that physical objects left in the trunk when the tree grew over them, the formation and physiology of wood structures such as branches and many other details.
      </p>
      <p class="bio-text">
        The engraving occurs thanks to the difference in density of the wood that grows in the rings during spring and fall. In the warmer months, the rings grow fast accumulating nutrients and the growth slows down in the months with reduced sun hours (although evergreens' growth is slightly different and so are their wood's properties). This affects the hardness of the rings.
      </p>
      <div class="div-text-img">
        <div class="row">
          <img class="img" :src="images.leyImage" alt="Ley wood image" />
          <p class="bio-text">
            My prints are organic, I couldn't make two the same even if I wanted to. Each print is unique and slightly different even if there are several based on the same piece of wood. My editions are open and the colours and type of paper can be modified to suit individual taste.
          </p>
        </div>
      </div>
      <p class="bio-text centered">
        Thank you for taking the time to look at my work.
      </p>
    </div>
  </MainContainer>
</template>

<script>
import leyImage from '../../assets/images/about/ley1.jpg';
import mapleImage from '../../assets/images/about/maple-400.jpg';
import roundImage from '../../assets/images/about/round.jpg';
import MainContainer from "../MainContainer.vue";

export default {
  name: 'AboutPage',
  components: {
    MainContainer
  },
  data() {
    return {
      images: {
        roundImage,
        mapleImage,
        leyImage
      }
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.about-container {
  max-width: 100rem;
  height: auto;
  padding: 1.25rem;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.div-text-img {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 8px 0;
}

.img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 6px;
}

.bio-text {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.centered {
  text-align: center;
  margin-bottom: 2rem;
}

@media (max-width: 892px) {
  .bio-text {
    font-size: 16px;
  }
}

@media (max-width: 646px) {
  .row {
    flex-direction: column;
  }

  .div-text-img {
    flex-direction: column;
  }

  .img {
    width: 100%;
    height: 180px;
    margin: 2px 0;
    border-radius: 6px;
    object-fit: cover;
    object-position: 10% 20%;
  }
}
</style>
