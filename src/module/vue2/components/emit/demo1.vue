<template>
  <div>
    <button @click="add">子组件按钮</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      add () {
        this.counter++
        this.$emit('parentAdd', this.counter)
      }
    }
  }
</script>
