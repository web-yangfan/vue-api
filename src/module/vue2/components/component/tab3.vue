<template>
  <div>
    <!-- tab3 组件-->
    <button @click="updataText">tab3按钮</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'tab3',
    props: [],
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab3按钮'
      }
    }
  }
</script>
