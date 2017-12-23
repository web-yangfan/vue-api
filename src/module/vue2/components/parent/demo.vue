<template>
  <div>
    <button @click="handlerEvent">通过父链接直接修改数据</button>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    methods: {
      handlerEvent () {
        this.$parent.message = '来自子组件的内容'
      }
    }
  }
</script>
