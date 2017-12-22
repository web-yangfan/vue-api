<template>
  <div class="container">
    <h3>修饰符</h3>
    <ul>
      <li>
        <ol>
          <li><strong>.lazy:</strong> <code>.lazy会转变为change事件中同步，但不是实时的，在失去焦点或按回车时才更新</code></li>
          <li><strong>.number:</strong> <code>input数组的输入的数字是 string类型，<em style="color: blueviolet"> .number 可以把输入的数字</em> 转换成 Number类型</code></li>
          <li><strong>.trim:</strong> <code>使用 v-model.trim="data" 可以去掉收尾空格</code></li>
        </ol>
      </li>
    </ul>
    <div class="demo-box">
      <demo4></demo4>
    </div>

    <br>
    <h3>v-model常用方法</h3>
    <h5 class="pb10">@input使，输入中文，没有选中汉字，也会触发</h5>
    <div class="demo-box">
      <demo1></demo1>
    </div>

    <h5 class="pb10">radio、checkbox、select等表单直接使用v-model，不用加name属性</h5>
    <div class="demo-box">
      <demo2></demo2>
    </div>

    <h5 class="pb10">checkbox :true-value和:false-value使用</h5>
    <div class="demo-box">
      <demo3></demo3>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import demo1 from './demo1.vue'
  import demo2 from './demo2.vue'
  import demo3 from './demo3.vue'
  import demo4 from './demo4.vue'
  export default {
    props: [],
    data () {
      return {}
    },
    mounted () {
    },
    methods: {},
    components: {
      demo1,
      demo2,
      demo3,
      demo4
    },
    watch: {}
  }
</script>
