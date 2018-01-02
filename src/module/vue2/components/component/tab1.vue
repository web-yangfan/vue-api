<template>
  <div>
    <!-- tab1 组件-->
    <button @click="updataText">tab1按钮</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab1按钮'
      }
    }
  }
</script>
