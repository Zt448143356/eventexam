<template>
  <div class="table-bg">
    <el-table
      :data="ShowTableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template v-slot="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="名字">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.sex }}</span>
            </el-form-item>
            <el-form-item label="通讯录 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <el-form-item label="邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="通讯录 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="名字"
        prop="name">
      </el-table-column>
      <el-table-column
        label="电话"
        prop="tel">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ShowTable",
    props:{
      ShowTableData:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .table-bg {
    background-color: aliceblue;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item{
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
