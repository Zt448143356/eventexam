<template>
  <div>
    <div class="bg-white">
      <h1 class="viewPoint-title">{{viewPointData.chname}}</h1>
      <p class="viewPoint-p">{{viewPointData.description}}</p>
    </div>
    <div class="bg-white maginTop">
      <h1 class="viewPoint-title">景区详情</h1>
      <div>
        <img :src="'http://localhost:8001'+viewPointData.img1" style="width: 100%;">
        <p class="viewPoint-p">{{viewPointData.img1Des}}</p>
      </div>
      <div>
        <img :src="'http://localhost:8001'+viewPointData.img2" style="width: 100%;">
        <p class="viewPoint-p">{{viewPointData.img2Des}}</p>
      </div>
      <div>
        <img :src="'http://localhost:8001'+viewPointData.img3" style="width: 100%;">
        <p class="viewPoint-p">{{viewPointData.img3Des}}</p>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "ViewPointContent",
    props: {
      viewPointData: {
        name: String,
        chname: String,
        description: String,
        img1: String,
        img1Des: String,
        img2: String,
        img2Des: String,
        img3: String,
        img3Des: String,
      }
    }
  }
</script>

<style scoped>
  .viewPoint-title {
    padding: 0 25px;
    font-size: 1.5em;
  }

  .viewPoint-p {
    text-indent: 2em;
    margin: 0 20px;
    line-height: 1.6rem;
    padding: 0 0 20px;
  }

  .maginTop {
    margin-top: 20px;
  }
</style>
