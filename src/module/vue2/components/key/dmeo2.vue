<template>
  <div>
    <p class="info1">输入内容，点击切换按钮，组件没有被复用</p>
    <template v-if="type === 'name' ">
      <label>用户名</label>
      <input type="text" placeholder="请输入用户名" key="name-input">
    </template>

    <template v-else>
      <label>邮箱</label>
      <input type="text" placeholder="请输入邮箱" key="email-input">
    </template>
    <button @click="handleToggleClick">切换输入类型</button>
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
        type: 'name'
      }
    },
    mounted () {
    },
    methods: {
      handleToggleClick () {
        this.type = this.type === 'name' ? 'mall' : 'name'
      }
    },
    components: {},
    watch: {}
  }
</script>

<style scoped>

</style>
