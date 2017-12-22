<template>
  <div>
    <input type="text" @input="handlerInput" />
    <p>输入的内容是：{{message}}</p>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: [],
    data () {
      return {
        message: ''
      }
    },
    methods: {
      handlerInput (e) {
        this.message = e.target.value
      }
    }
  }
</script>
