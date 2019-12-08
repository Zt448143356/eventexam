<template>
  <div class="limit">
    <el-menu mode="horizontal" background-color="#f8f8f8">

      <el-menu-item index="/home" @click="gotoPath">首页</el-menu-item>

      <el-submenu index="2">
        <template v-slot:title>家乡特产和美食</template>
        <el-menu-item index="/product" @click="gotoPath">家乡特产</el-menu-item>
        <el-menu-item index="/food" @click="gotoPath">家乡美食</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template v-slot:title>家乡旅游景点</template>
        <el-menu-item index="/yandangshan" @click="gotoPath">雁荡山</el-menu-item>
        <el-menu-item index="/nanxijiang" @click="gotoPath">楠溪江</el-menu-item>
      </el-submenu>
      <el-menu-item index="/showinfo" @click="gotoPath">学生信息展示</el-menu-item>


      <el-row class="right" style="margin-top: 10px" v-if="!isShow">
        <el-button type="primary" round @click.native="gotoLogin">登录</el-button>
        <el-button type="primary" round @click.native="gotoRegister">注册</el-button>
      </el-row>

      <!--头像-->
      <div class="right">
        <el-row class="left" v-if="isShow">
          <div>
            <el-col :span="12" style="margin-top: 10px">
              <el-avatar size="medium" :src="imageUrl"></el-avatar>
            </el-col>
          </div>
        </el-row>


        <el-row class="right" v-if="isShow">
          <div>
            <el-submenu index="choose">
              <template v-slot:title>
              </template>
              <el-menu-item index="/Profile" @click="gotoPath">个人信息</el-menu-item>
              <el-menu-item index="/Login" @click="gotoLogout">退出</el-menu-item>
            </el-submenu>
          </div>
        </el-row>
      </div>

    </el-menu>

  </div>
</template>

<script>
  import {Logout} from "../../../network/User";

  export default {
    name: "NavBar",
    comments: {

    },
    computed: {
      imageUrl(){
        return "http://localhost:8001"+this.$store.getters.getImageUrl;
      },
      isShow() {
        return this.$store.getters.getLogin;
      },
      path(){
        return this.$route.path;
      }
    },
    methods: {
      gotoPath(item){
        if(this.path!=item.index)
            this.$router.replace(item.index);
      },
      gotoRegister(){
        if(this.$route.path!="/Register")
        this.$router.replace("/Register");
      },
      gotoLogin(){
        if(this.$route.path!="/Login")
          this.$router.replace("/Login");
      },
      gotoLogout(){
        Logout(this.$store.getters.getEmail);
        this.$cookies.remove("token");
        this.$store.commit("setLogin",false);
        this.$message({
          message: '退出成功!',
          type: 'success'
        });
        this.$router.replace("/home");
      }
    }
  }
</script>

<style scoped>

</style>
