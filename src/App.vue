<template>
  <div id="app" class="page" :class="{'bg':bgShow}">
    <el-container>
      <el-header style="padding: 0; background: #f8f8f8;">
        <NavBar/>
      </el-header>

      <el-main>
        <div class="limit">
          <router-view/>
        </div>
      </el-main>

      <el-footer height="48" style="padding: 0" class="d">
        <Foot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  import NavBar from "./components/content/navbar/NavBar";
  import Foot from "./components/content/foot/Foot";

  export default {
    name: 'app',
    computed:{
      bgShow(){
        return this.$route.path!="/home";
      }
    },
    components: {
      NavBar,
      Foot
    },
    created() {

      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state));
      })

      //this.$cookies.set("token","132","30min");
      //this.$cookies.remove("token");
      if (this.$cookies.isKey("token")) {
        this.$store.commit("setLogin", true);
      }else {
        this.$store.commit("setLogin",false);
        sessionStorage.removeItem("store");
      }


    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
