<template>
<RegisterFrom @submit="submitRegister"></RegisterFrom>
</template>

<script>

  import {Register} from "../../network/User";
  import md5 from "js-md5"
  import RegisterFrom from "../../components/common/registerForm/RegisterFrom";

  export default {
    name: "register",
    components: {RegisterFrom},
    data(){
      return{
        uploadData:{
          email: '',
          name:'',
          pass:'',
          imageUrl:''
        },
      }
    },
    methods:{
      submitRegister(registerData){
        this.uploadData.email=registerData.email;
        this.uploadData.name=registerData.name;
        this.uploadData.pass=md5(registerData.pass);
        this.uploadData.imageUrl=registerData.imageUrl;
        Register(this.uploadData).then(res=>{
          if(res.code==200){
            this.$message({
              message: '注册成功！',
              type: 'success'
            });
            this.$router.replace('/login');
          }else {
            this.$message.error('注册失败，请联系管理员！');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
