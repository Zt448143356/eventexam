<template>
  <el-row >
    <el-input
      :placeholder="showContent"
      v-model="input"
      clearable
      @input="emitContent"
    >
    </el-input>
  </el-row>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        input: ''
      }
    },
    props:{
      showContent:{
        type:String,
        default(){
          return''
        }
      }
    },
    methods:{
      emitContent(){
        this.$emit('InputContent',this.input);
      }
    }
  }
</script>

<style scoped>

</style>
