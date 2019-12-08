<template>
  <div>
    <SearchBar style="margin-bottom: 20px; width: 300px" @InputContent="getInput" showContent="请输入搜索的名字"></SearchBar>
    <ShowTable :ShowTableData="filterShowData"></ShowTable>
  </div>
</template>

<script>
  import ShowTable from "components/content/table/ShowTable";
  import SearchBar from "components/common/searchBar/SearchBar";
  import {getShowInfoContent} from "network/ShowInfo";

  export default {
    name: "ShowInfo",
    data(){
      return{
        Data:[{
          id:String,
          email:String,
          tel:String,
          name:String,
          sex:String
        }],
        search:''
      }
    },
    computed:{
      filterShowData(){
        let filterShowData = this.Data,
            searchString = this.search;

        if(!searchString){
          return filterShowData;
        }

        searchString = searchString.trim();

        filterShowData = filterShowData.filter(function(item){
          if(item.name.indexOf(searchString) !== -1){
            return item;
          }
        })

        // 返回过来后的数组
        return filterShowData;
      }
    },
    methods:{
      getInput(content) {
        this.search=content;
      },
      getShowData(){
        this.Data.splice(0,this.Data.length);
        getShowInfoContent().then(res=>{
          this.Data.push(...res.data);
        })
      }
    },
    components: {ShowTable, SearchBar},
    created() {
      this.getShowData();
    }
  }
</script>

<style scoped>

</style>
