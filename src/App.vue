<template>
  <div>
    <router-view></router-view>
  </div>


</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>


<style>

html,body,#app{
  height:100%;
  margin: 0;
  padding: 0;
}

.el-container {
  height: 100%;
}

.el-header,
.el-footer
{
  background-color: #b3c0d1; color: #333; text-align: center; line-height: 60px;
}

.el-aside {
  background-color: #d3dce6; color: #333; text-align: center; line-height: 200px;
}

.el-main {
  background-color: #e9eef3; color: #333; text-align: center; line-height: 160px;
}

.el-menu {
  background-color: #d3dce6;
}
</style>

