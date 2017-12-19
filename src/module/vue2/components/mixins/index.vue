<template>
  <div class="container">
    <h3>mixins</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>Array&lt;Object&gt;</code></li>
        </ol>
      </li>
      <li><strong>详情:</strong>mixins 选项接受一个混合对象的数组。这些混合实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。举例：如果你混合包含一个钩子而创建组件本身也有一个，两个函数将被调用。Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。</li>
    </ul>
    <h5>例子1：</h5>
    <pre>
      <code class="js">
var mixin = {
  created: function () { console.log(1) }
}
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
// => 1
// => 2
      </code>
    </pre>

    <h5>例子2：</h5>
    <pre>
      <code class="js">
let mixins = {
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
}

new Vue({
  el: '.wrap',
  mixins: [mixins],
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
