<template>
  <div>
    <p>使用computed改变data中的数据</p>
    <p>{{count}}</p>
    <p>{{sum}}</p>
    <br><br>
    <button type="text" @click="handlerClick">点击</button>
    <span>{{clickStr}}</span>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        str: '原始数据',
        clickStr: '没有被点击'
      }
    },
    computed: {
      count: function () {
        this.str = 'computed计算后的数据'
        return this.str
      },
      sum: function () {
        return 'computed中没有被覆盖的方法'
      }
    },
    mounted () {
    },
    methods: {
      handlerClick () {
        this.clickStr = '被点击的后的数据'
      }
    },
    watch: {}
  }
</script>

<style scoped>

</style>
