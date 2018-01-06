<template>
  <div>
    <p>显示父组件total 值:{{this.value}}</p>
    <button @click="add">子组件按钮</button>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      add () {
        this.counter++
        /*
        * <demo5 v-model="total"></demo5> 通过这种方式传递total
        * 子组件 通过this.$emit('input', this.counter) 改边父组件total值
        * */
        this.$emit('input', this.counter)
      }
    }
  }
</script>
