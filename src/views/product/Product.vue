<template>
  <div>
    <Carousel :images="images"/>
    <SearchBar style="margin-bottom: 20px; width: 300px" @InputContent="getInput" showContent="请输入要搜索的名字"></SearchBar>
    <ProductContent>
      <ProductItem v-for="item in filterProduct" :key="item.name+item.id" :product=item ></ProductItem>
    </ProductContent>
  </div>
</template>

<script>
  import Carousel from "components/common/carousel/Carousel";
  import ProductContent from "components/content/product/ProductContent";
  import ProductItem from "components/content/product/ProductItem";
  import SearchBar from "components/common/searchBar/SearchBar";
  import {
    getLocalProductionCarousel,
    getLocalProductionContent,
    getFoodCarousel,
    getFoodContent
  } from "network/product";

  export default {
    name: "product",
    components: {SearchBar, ProductItem, Carousel, ProductContent},
    data() {
      return {
        images: [],
        path: this.$route.path,
        isContent: String,
        product: [{
          id: String,
          name: String,
          productDescription: String,
          productImg: String,
        }],
        search:''
      }
    },
    computed: {
      isGet() {
        return this.path != this.isContent;
      },
      filterProduct(){
        let filterProduct = this.product,
            searchString = this.search;

        if(!searchString){
          return filterProduct;
        }

        searchString = searchString.trim();

        filterProduct = filterProduct.filter(function(item){
          if(item.name.indexOf(searchString) !== -1){
            return item;
          }
        })
        // 返回过来后的数组
        return filterProduct;
      }
    },

    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      this.path = to.path;
      if (this.isGet) {
        if (this.path == '/product') {
          this.getLocalProductionCarouselData();
          this.getLocalProductionContentData();
          this.isContent = '/product';
        }
        if (this.path == '/food') {
          this.getFoodCarouselCarouselData();
          this.getFoodContentData();
          this.isContent = '/food';
        }
      }
      next();
    },

    methods: {
      getInput(content) {
        this.search=content;
      },


      getLocalProductionCarouselData() {
        this.images.splice(0, this.images.length);
        getLocalProductionCarousel().then(res => {
          this.images.push("http://localhost:8001" + res.data.img1);
          this.images.push("http://localhost:8001" + res.data.img2);
          this.images.push("http://localhost:8001" + res.data.img3);
          this.images.push("http://localhost:8001" + res.data.img4);
        })
      },
      getFoodCarouselCarouselData() {
        this.images.splice(0, this.images.length);
        getFoodCarousel().then(res => {
          this.images.push("http://localhost:8001" + res.data.img1);
          this.images.push("http://localhost:8001" + res.data.img2);
          this.images.push("http://localhost:8001" + res.data.img3);
          this.images.push("http://localhost:8001" + res.data.img4);
        })
      },
      getLocalProductionContentData() {
        this.product.splice(0, this.product.length);
        getLocalProductionContent().then(res => {
          this.product.pop();
          this.product.push(...res.data);
        })
      },
      getFoodContentData() {
        this.product.splice(0, this.product.length);
        getFoodContent().then(res => {
          this.product.pop();
          this.product.push(...res.data);
        })
      },
    },


    created() {
      if (this.path == '/product') {
        this.getLocalProductionCarouselData();
        this.getLocalProductionContentData();
        this.isContent = '/product';
      }
      if (this.path == '/food') {
        this.getFoodCarouselCarouselData();
        this.getFoodContentData();
        this.isContent = '/food';
      }
    }
  }
</script>

<style scoped>

</style>
