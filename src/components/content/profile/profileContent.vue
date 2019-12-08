<template>
  <div class="bg-white">
    <div style="padding: 20px">
      <h3>基本信息</h3>
      <el-row>
        <div style="border: 10px #000000">
          <el-image
            class="right"
            style="width: 100px; height: 100px"
            :src="imageUrl"
            :preview-src-list="image">
          </el-image>
        </div>

        <div class="left">
          <h2 class="left">邮箱：</h2>
          <h2 class="left">{{email}}</h2>
          <div>
            <h2 class="left">名字：</h2>
            <h2 class="left">{{name}}</h2>
          </div>
        </div>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="8">
          <p>学号：1732332223</p>
          <p>民族：汉</p>
          <p>性别：男</p>
          <p>籍贯：浙江温州</p>
          <p>年级：2017级</p>
        </el-col>
        <el-col :span="8">
            <p>宿舍：#9西605</p>
            <p>联系方式：17816121619</p>
            <p>班级：计算机172</p>
            <p>学校：中国计量大学现代科技学院</p>
            <p>职务：生活委员</p>
        </el-col>
        <el-col :span="8">
          <img src="../../../assets/img/person.jpg" alt="this is picture" style="height: 220px;">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profileContent",
    data() {
      return {
        email: '',
        name: '',
        imageUrl: '',
        image: []
      }
    },
    created() {
      this.email = this.$store.getters.getEmail;
      this.name = this.$store.getters.getName;
      this.imageUrl = 'http://localhost:8001' + this.$store.getters.getImageUrl;
      this.image = new Array();
      this.image.push(this.imageUrl);
    }
  }
</script>

<style scoped>

</style>
