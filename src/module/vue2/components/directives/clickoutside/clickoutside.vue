<template>
  <div class="main" v-clickoutside="handlerClose">
    <button @click="show = !show" class="btn">点击显示下拉菜单</button>
    <div class="dropdown" v-show="show">
      <p>下拉框的内容，点击外面区域可以关闭</p>
    </div>
  </div>
</template>

<script>
  import clickoutside from './clickoutside.js'
  export default {
    name: 'clickoutside',
    directives: {
    // 外部关闭的下拉菜单
      clickoutside: clickoutside
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      handlerClose () {
        this.show = false
      }
    }
  }
</script>

<style scoped lang="stylus">
.main
  width: 125px
  .btn
    display: block
    width: 100%
    color: #fff
    background-color: #39f
    border: 0
    padding: 6px
    text-align: center
    font-size: 12px
    border-radius: 4px
    cursor: pointer
    outline: none
    position: relative
  .btn:active
    top: 1px
    left: 1px
  .dropdown
    width: 100%
    height: 150px
    margin: 5px 0
    font-size: 12px
    background-color: #fff
    border-radius: 4px
    box-shadow: 0 1px 6px rgba(0,0,0,.2)
    p
      display: inline-block
      padding: 6px
</style>
