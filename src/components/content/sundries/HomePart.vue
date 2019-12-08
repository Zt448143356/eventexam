<template>
  <div>
    <el-row class="part">
      <div class="am-g">
        <el-col class="part-img left" :sm="24" :md="12" :lg="8">
          <img src="../../../assets/img/landing.png"/>
        </el-col>
        <el-col :sm="24" :md="12" :lg="16">
          <h2 class="part-title">温州旅游欢迎你！</h2>
          <p> “东瓯名城”温州，是一座历史文化悠久的城市。早在春秋战国时期，就是中国沿海九个港口之一。公元323年，著名学者郭璞选址始建温州城。</p>
        </el-col>
      </div>
    </el-row>
    <el-row class="about">
      <div class="am-g">
        <el-col>
          <h2 class="about-title about-color">你心目中最想去的地方（温州）</h2>
        </el-col>
        <el-row class="am-g" :gutter="50">
          <el-col :sm="24" :md="8" :lg="12">
            <div>
              <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" >
                <el-form-item label="你的名字" prop="name" required >
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="你的邮箱" prop="email" required>
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="你最想去的地方" prop="content" required>
                  <el-input type="textarea" v-model="ruleForm.content" maxlength="250" show-word-limit></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :sm="24" :md="16" :lg="12">
            <div>
              <h4 class="about-color">关于温州</h4>
              <p class="about-p">
                温州是国家历史文化名城，素有“东南山水甲天下”之美誉。温州古为瓯地，也称东瓯，公元323年建郡，为永嘉郡,传说建郡城时有白鹿衔花绕城一周,故名鹿城。唐朝时（公元675年）始称温州，至今已有2000余年的建城历史。温州是中国民营经济发展的先发地区与改革开放的前沿阵地，在改革开放初期，以“南有吴川，北有温州”享誉全国。温州文化属瓯越文化，温州人属江浙民系使用吴语，温州话被评为中国最难懂方言之一。温州是中国数学家的摇篮、中国南戏的故乡、中国海鲜鸡蛋之乡，温州人被国人称之为东方犹太人。
              </p>
              <h4 class="about-color">景区介绍</h4>
              <p class="about-p">
                温州旅游景区集山、江、海、湖、岛、泉之大成，自然景观与人文景观交相辉映。温州拥有1个2处世界地质公园，3个中国优秀旅游城市，1个国家5A级旅游景区、5个国家4A级旅游景区，3个6处国家重点风景名胜区、8处省级风景名胜区，1个全国红色旅游经典景区，6家全国工业旅游示范企业，1个旅游经济强区，1个省级旅游度假区，5处国家级森林公园、9处省级森林公园，2处国家级自然保护区。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: "HomePart",
    data() {
      return {
        ruleForm: {
          name: '',
          email:'',
          content: ''
        },
        rules: {
          name: [
            {required: true,message: '请输入名字', trigger: 'blur'}
          ],
          email: [
            {required: true,message: '请输入邮箱地址', trigger: 'blur'},
            {type:'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          content: [
            {required: true,message: '请填写内容', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('submit',this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .part {
    background: #0bb59b;
    padding: 50px 0;
  }

  .part-img {
    text-align: center;
  }

  .part-title {
    font-size: 140%;
    margin: 1.6rem 0 1.6rem 0;
  }

  .about {
    background: #fff;
    padding: 40px 0;
    color: #7f8c8d;
  }

  .about-title {
    font-size: 180%;
    padding: 30px 0 50px 0;
    text-align: center;
  }

  .about-color {
    color: #34495e;
  }

  .about-p {
    margin-top: 1.6rem;
    line-height: 1.6rem;
    font-size: 1.0rem;
    margin-top: 1.6rem;
    color: #7f8c8d;
  }
</style>
