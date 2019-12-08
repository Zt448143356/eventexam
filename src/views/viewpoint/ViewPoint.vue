<template>
  <div>
    <Carousel :images="images"/>
    <ViewPointContent :view-point-data="ViewPointData"></ViewPointContent>
  </div>
</template>

<script>
  import Carousel from "../../components/common/carousel/Carousel";
  import ViewPointContent from "../../components/content/viewpoint/ViewPointContent";
  import {
    getyandangshanCarouselMap,
    getnanxijiangCarouselMap,
    getyandangshanContent,
    getnanxijiangContent
  } from "../../network/ViewPoint";

  export default {
    name: "ViewPoint",
    components: {ViewPointContent,Carousel},
    data() {
      return {
        images: [],
        path: this.$route.path,
        isContent: String,
        ViewPointData: {
          name: '',
          chname:'',
          description: '',
          img1: '',
          img1Des:'',
          img2: '',
          img2Des:'',
          img3: '',
          img3Des:'',
        }
      }
    },
    computed: {
      isGet() {
        return this.path != this.isContent;
      },
    },

    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      this.path = to.path;
      if (this.isGet) {
        if (this.path == '/yandangshan') {
          this.getyandangshanCarouselData();
          this.getyandangshanContentData();
          this.isContent = '/yandangshan';
        }
        if (this.path == '/nanxijiang') {
          this.getnanxijiangCarouselData();
          this.getnanxijiangContentData();
          this.isContent = '/nanxijiang';
        }
      }
      next();
    },
    methods: {
      getyandangshanCarouselData() {
        this.images.splice(0, this.images.length);
        getyandangshanCarouselMap().then(res => {
          this.images.push("http://localhost:8001" + res.data.img1);
          this.images.push("http://localhost:8001" + res.data.img2);
          this.images.push("http://localhost:8001" + res.data.img3);
          this.images.push("http://localhost:8001" + res.data.img4);
        })
      },
      getnanxijiangCarouselData() {
        this.images.splice(0, this.images.length);
        getnanxijiangCarouselMap().then(res => {
          this.images.push("http://localhost:8001" + res.data.img1);
          this.images.push("http://localhost:8001" + res.data.img2);
          this.images.push("http://localhost:8001" + res.data.img3);
          this.images.push("http://localhost:8001" + res.data.img4);
        })
      },
      getyandangshanContentData(){
        getyandangshanContent().then(res=>{
          this.ViewPointData = res.data;
        })
      },
      getnanxijiangContentData(){
        getnanxijiangContent().then(res=>{
          this.ViewPointData = res.data;
        })
      }
    },
    created() {
      if (this.path == '/yandangshan') {
        this.getyandangshanCarouselData();
        this.getyandangshanContentData();
        this.isContent = '/yandangshan';
      }
      if (this.path == '/nanxijiang') {
        this.getnanxijiangCarouselData();
        this.getnanxijiangContentData();
        this.isContent = '/nanxijiang';
      }
    }
  }
</script>

<style scoped>

</style>
