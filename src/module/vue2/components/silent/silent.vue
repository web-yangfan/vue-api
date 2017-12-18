<template lang="jade">
  .container
    h3 silent
    h4 Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改
    ul
      li
        strong 类型:
        code boolean
      li
        strong 默认值:
        code false
      li
        strong 用法:
        span 取消 Vue 所有的日志与警告。
    pre
      code Vue.config.silent = true



</template>
<style lang="stylus" scoped>
</style>
<script>
  export default {
    props: [],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {},
    watch: {},
  }

</script>
