<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- 使用svg-icon组件(已经全局注册)，设置icon-class属性，值是图标的文件名(无后缀) -->
    <svg-icon icon-class="dashboard" />
    <svg-icon icon-class="example" />
    <svg-icon icon-class="password" />
    <svg-icon icon-class="skill" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
