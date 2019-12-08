<template>
  <div class="detail_bg">
    <h2 class="detail-h2"> 雁荡山 、楠溪江 、江心屿 、中雁荡山，期待你去体验!</h2>
    <el-row >
      <el-col :xs="8" :sm="24" :md="12" :lg="6" :xl="6" :gutter="10" v-for="(item,index) in this.data" :key=index class="detail-col">
        <HomeDetailItem :content="item"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import HomeDetailItem from "./HomeDetailItem";

  export default {
    name: "HomeDetail",
    data() {
      return {
        data: {
          'content1': {
            title: "雁荡山",
            detail: "北雁荡山位于乐清市境内东北部，万山重叠，群峰争雄，悬嶂蔽日，飞瀑凌空，向来有“寰中绝胜”、“海上名山”、“东南第一山” 之誉。是全国十大名山之一,享有“天下奇秀”美誉。"
          },
          'content2': {
            title: "楠溪江",
            detail: "永嘉是天下乐土，楠溪江是地上的文章。“永嘉”二字，蕴含“水长而美”的意思，这水，就是境内的楠溪江。悠悠三百里楠溪江融天然风光与人文景观为一体，以水美、岩奇、瀑多、村古、林秀而名闻遐迩，是我国国家级风景区中唯一以山水田园风光见长的景区。。"
          },
          'content3': {
            title: "江心屿",
            detail: "江心屿是国家AAAA级旅游区，横卧在温州市鹿城区北面瓯江之中。景区占地面积为1070亩。其盛名从南北朝至今已有1570多年，是中国四大名胜孤屿之一。江心屿自然风光秀丽，古树名木苍翠蓊郁，亭台点缀，桥榭相映，历来被誉为“瓯江蓬莱”。"
          },
          'content4': {
            title: "中雁荡山",
            detail: "中雁荡山于一九八九年被国家建设部批准为国家级风景名胜区，原名白石山，道书称“白石洞天”，唐天宝初曾改名为“五色山”，宋时称为“白石岩”或“道士岩”，又雅称“玉甑”。"
          }
        }
      }
    },
    components: {
      HomeDetailItem
    }
  }
</script>

<style scoped>
  .detail_bg{
    background-color: #ffffff;
  }
  .detail-h2 {
    text-align: center;
    font-size: 150%;
    margin: 30px 0;
    padding: 30px 0;
  }
  .detail-col{

  }
</style>
