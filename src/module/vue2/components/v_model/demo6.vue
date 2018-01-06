<template>
  <div>
    <p>父组件传过来的数据 {{testAge}}</p>
    <button @click="add">子组件按钮</button>
  </div>
</template>

<script>
  export default {
    props: ['testAge'],
    data () {
      return {
        num: 10
      }
    },
    methods: {
      add () {
        // 调用父组件传过来的方法
        this.num++
        this.$emit('addTogether', this.num)
      }
    }
  }
</script>
