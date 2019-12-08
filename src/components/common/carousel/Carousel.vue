<template>
  <el-carousel :interval="2000" type="card" height="250px" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
    <el-carousel-item v-for="(img,index) in images" :key="index">
      <img :src="img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "Carousel",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

</style>
