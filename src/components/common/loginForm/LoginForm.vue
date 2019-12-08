<template>
  <div class="bg-white am-g">
    <el-row>
      <div>
        <el-col :lg="12" :md="16" :sm="24" style="margin: 0 auto; float: none">
          <el-divider content-position="center"><h2 style="margin: 0">登录</h2></el-divider>
          <el-row>
            <el-form :label-position="labelPosition" label-width="70px" :model="LoginData" :rules="rules" ref="LoginData">
              <el-form-item label="邮箱:" prop="email">
                <el-input type="email" v-model="LoginData.email" clearable placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="LoginData.password" show-password placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="check" label="记住密码"></el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" round class="left" @click="submitForm('LoginData')">登录</el-button>
                <el-button type="info" round class="right">忘记密码</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        labelPosition: 'top',
        LoginData: {
          email: '',
          password: ''
        },
        check: false,
        rules: {
          email: [
            {required: true,message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('submit', this.LoginData);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
