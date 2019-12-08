<template>
  <div class="bg-white">
    <el-row>
      <div>
        <el-col :lg="8" :md="12" :sm="16" style="margin: 0 auto; float: none">
          <el-divider content-position="center"><h2 style="margin: 0">注册</h2></el-divider>
          <el-row>
            <el-form :label-position="labelPosition" label-width="100px" :model="registerData" :rules="rules"
                     ref="registerData">
              <el-form-item label="头像:">
                <div class="center" style="width: 178px;height: 178px;">
                  <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8001/avatar"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="邮箱:" prop="email">
                <el-input type="email" v-model="registerData.email" clearable placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="registerData.pass" show-password autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                <el-input type="password" v-model="registerData.checkPass" show-password autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="名字:" prop="name">
                <el-input type="name" v-model="registerData.name" clearable placeholder="请输入名字"></el-input>
              </el-form-item>
              <el-form-item label="年龄:" prop="age">
                <el-input v-model.number="registerData.age"></el-input>
              </el-form-item>
              <el-form-item label="性别:" prop="sex">
                <el-radio-group v-model="registerData.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('registerData')">提交</el-button>
                <el-button @click="resetForm('registerData')">重置</el-button>
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
    name: "RegisterFrom",
    data() {
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerData.checkPass !== '') {
            this.$refs.registerData.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerData.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'left',
        imageUrl: '',
        registerData: {
          email: '',
          name: '',
          pass: '',
          checkPass: '',
          sex: '',
          age: '',
          imageUrl: ''
        },
        rules: {
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          pass: [
            {required: true},
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: true},
            {validator: validatePass2, trigger: 'blur'}
          ],
          name: [
            {required: true}
          ],
          age: [
            {required: true},
            {validator: checkAge, trigger: 'blur'}
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
        }
      };

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('submit', this.registerData);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.registerData.imageUrl = res['fileName'];
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    }
  }
</script>

<style scoped>
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
