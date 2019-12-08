<template>
  <div >
    <LoginForm @submit="PostLogin"></LoginForm>
  </div>
</template>

<script>
  import LoginForm from "../../components/common/loginForm/LoginForm";
  import md5 from "js-md5"
  import {Login} from "../../network/User";

  export default {
    name: "Login",
    components: {LoginForm},
    methods:{
      PostLogin(Form){
        let Email =Form.email;
        let md5Password =  md5(Form.password);
        Login(Email,md5Password).then(res=>{
          if(res.code==200){
            this.$message({
              message: '登录成功!',
              type: 'success'
            });
            this.$store.commit('setLogin',true);
            this.$store.commit('setLoginData',res.data);
            this.$cookies.set('token',res.data['token'],"30min");
            this.$router.replace('/home');
          }else{
            this.$message.error("账号密码错误");
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
