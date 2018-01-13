<template>
  <div>
    <input type="text" v-model="str1" style="width: 200px">
    <p>{{watchStr1}}</p>
    <br><br>
    <input type="text" v-model="str2" style="width: 200px">
    <br><br>
    <div>
      <p>回调函数val和oldVal</p>
      <p><code>val</code>: {{str2Val}}</p>
      <p><code>oldVal</code>: {{str2OldVal}}</p>
    </div>
    <br><br>
    <p>josn对象监控</p>
    <input type="text" v-model="str3Json.a">
    <p>{{str3Json.b}}</p>
  </div>
</template>

<script>
  export default {
    name: 'demo1',
    props: [],
    data () {
      return {
        str1: '通过watch监控输入框的变化',
        watchStr1: '',
        str2: '回调返回值',
        str2Val: '',
        str2OldVal: '',
        str3Json: {
          a: 'json监控',
          b: ''
        }
      }
    },
    mounted () {
    },
    methods: {
      watchStr1Fn () {
        this.watchStr1 = this.str1
      }
    },
    watch: {
      'str1': 'watchStr1Fn',
       str2: function (val, oldVal) {
        this.str2Val = val
        this.str2OldVal = oldVal
      },
      'str3Json.a': function (val, oldVal) {
        this.str3Json.b = this.str3Json.a
      }

    }
  }
</script>

<style scoped>

</style>
