<template>
  <div>
    <el-row>
      <div style="background: #0d84ff;height: 80px;width: 100%;line-height: 80px">
        <el-col :span="18" :offset="3">
          <!--在这个栅格里面再开辟一个24列的el-row-->
          <el-row>
            <!--logo区域-->
            <el-col :span="6">
              <span style="font-size: 30px;color: white;">Logo</span>
            </el-col>

            <!--导航栏-->
            <el-col :span="18" style="color: white;">
              <div style="width: 80px;text-align: center;display: inline-block">导航1</div>
              <div style="width: 80px;text-align: center;display: inline-block">导航1</div>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>

  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

</template>

<script>
export default {
  name: "myAbout",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
