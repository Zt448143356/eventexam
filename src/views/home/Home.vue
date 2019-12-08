<template>
  <div>
    <Carousel :images="images"/>
    <HomeDetail/>
    <HomePart @submit="submit"/>
  </div>
</template>

<script>
  import {getCarousel,submitHomeData} from "network/home";
  import Carousel from "components/common/carousel/Carousel";
  import HomeDetail from "components/common/homeDetail/HomeDetail";
  import HomePart from "components/content/sundries/HomePart";

  export default {
    name: "Home",
    data() {
      return {
        images: []
      }
    },
    components: {HomePart, HomeDetail, Carousel},
    methods: {
      getCarouselData() {
        getCarousel().then(res => {
          this.images.push("http://localhost:8001" + res.data.img1);
          this.images.push("http://localhost:8001" + res.data.img2);
          this.images.push("http://localhost:8001" + res.data.img3);
          this.images.push("http://localhost:8001" + res.data.img4);
        })
      },
      submit(Form){
        submitHomeData(Form.name,Form.email,Form.content)
      }
    },
    created() {
      this.getCarouselData();
    }
  }
</script>

<style scoped>

</style>
