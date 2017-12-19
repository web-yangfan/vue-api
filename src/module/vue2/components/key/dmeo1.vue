<template>
  <div>
    <p class="info1">在input框中输入内容，点击切换按钮，发现之前键入的内容还在，说明input元素被复用了</p>
    <template v-if="type === 'name' ">
      <label>用户名</label>
      <input type="text" placeholder="请输入用户名">
    </template>

    <template v-else>
      <label>邮箱</label>
      <input type="text" placeholder="请输入邮箱">
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
