<template>
  <div v-show="isShow">
    <el-col :span="8" class="left" style="margin-bottom: 30px">
      <el-card :body-style=this.cardStyle shadow="hover">
        <img :src="'http://localhost:8001'+product.productImg" class="Product-image">
        <div style="padding: 14px;">
          <span>{{product.name}}</span>
          <p>{{product.productDescription}}</p>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    data(){
      return{
        cardStyle:{
          padding: '20px',
          height: '500px'
        },
        isShow:true
      }
    },
    props: {
      product: {
        id: String,
        name: String,
        productDescription: String,
        productImg: String
      }
    }
  }
</script>

<style scoped>
  .Product-image {
    width: 100%;
  }

</style>
