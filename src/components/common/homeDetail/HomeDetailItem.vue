<template>
  <div class="detail-mb"><h3 class="detail-h3">{{content.title}}</h3>
    <p class="detail-p">{{content.detail}}</p></div>

</template>

<script>
  export default {
    name: "HomeDetailItem",
    props: {
      content: {
        title: String,
        detail: String
      }
    }
  }
</script>

<style scoped>
  .detail-h3 {
    color: #1f8dd6;
  }

  .detail-p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: 1.6rem;
    font-size: 1.0rem;
    margin-top: 1.6rem;
    color: #7f8c8d;
  }

  .detail-mb {
    margin: 0 10px 0 20px;
  }

</style>
