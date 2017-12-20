<template>
  <div>

    <ul>
      <li v-for="v in arr">• {{v}}</li>
    </ul>

    <button @click="onPush">push</button>
    <button @click="onPop">pop</button>
    <button @click="onShift">shift</button>
    <button @click="onUnshift">unshift</button>
    <button @click="onSpliceAdd">splice 添加</button>
    <button @click="onSpliceDel">splice 删除</button>
    <button @click="onSort">sort</button>
    <button @click="onReverse">reverse</button>
  </div>
</template>

<style scoped lang="stylus">
  button
    padding: 10px
</style>

<script>
  export default {
    name: 'demo1',
    props: [],
    data () {
      return {
        arr: ['艾斯', '路飞', '香克斯', '鹰眼', '多弗朗明哥', '巴索罗米·熊' ,'汉库克', '青雉', ' 黄猿', '赤犬']
      }
    },
    mounted() {
    },
    methods: {
      onPush () {
        this.arr.push('娜美')
      },
      onPop () {
        this.arr.pop()

      },
      onShift () {
        this.arr.shift()
      },
      onUnshift () {
        this.arr.unshift('索罗', '马尔科', '乔兹')
      },
      onSpliceAdd () {
        this.arr.splice(1, 2, '我是添加')
      },
      onSpliceDel () {
        this.arr.splice(1, 4)
      },
      onSort () {
        this.arr.sort()
      },
      onReverse () {
        this.arr.reverse()
      }
    },
    components: {},
    watch: {}
  }
</script>
