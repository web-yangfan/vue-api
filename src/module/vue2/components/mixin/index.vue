<template>
  <div class="container">
    <h3>Vue.mixin( mixin )</h3>
    <ul>
      <li><strong>参数:</strong><code>{Object} mixin</code></li>
      <li><strong>用法:</strong> <span>全局注册一个混合，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混合，向组件注入自定义的行为。不推荐在应用代码中使用</span></li>
    </ul>
    <h5>例子：</h5>
    <pre>
      <code class="js">
Vue.mixin({
  data() {
    return {
      name: '艾斯'
    }
  },
  created(){
    this.hello()
  },
  mounted(){
    this.say()
  },
  methods:{
    hello(){
      console.log('I am hello')
    },
    say(){
      console.log('I am mixin say')
    }
  }
});

new Vue({
  el: '.wrap',
  data: {
    name: '路飞'
  },
  mounted(){
    this.say()
    this.list()
  },
  methods: {
    list() {
      console.log(this.name)
    },
    say() {
      console.log('I am say')
    }
  }
})
// 输出
// => I am hello
// => I am say
// => I am say
// => 路飞
      </code>
    </pre>
  </div>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
      }
    }

  }

</script>
