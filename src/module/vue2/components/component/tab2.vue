<template>
  <div>
    <!-- tab2 组件-->
    <button @click="updataText">tab2按钮</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'tab2',
    props: [],
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab2按钮'
      }
    }
  }
</script>
