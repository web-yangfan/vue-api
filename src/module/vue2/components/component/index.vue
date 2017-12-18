<template>
  <div class="container">
    <h3>Vue.component( id, [definition] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{string} id</code></li>
          <li><code>{Function | Object} [definition]</code></li>
        </ol>
      </li>
      <li><strong>用法:</strong> <span>注册或获取全局组件。注册还会自动使用给定的 <code>id</code>设置组件的名称</span></li>
      <li><strong class="warning">注意:</strong>Vue.component 注册全局组件。components 是注册局部组件 </li>
      <li>
        父子组件的关系可以总结为 props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息
        <p class="pic"></p>
      </li>
    </ul>

    <h5>例子1：</h5>
    <pre v-pre>
      <code class="js">
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))
// 注册组件，传入一个选项对象（自动调用 Vue.extend）
Vue.component('my-component', { /* ... */ })
// 获取注册的组件（始终返回构造器）
var MyComponent = Vue.component('my-component')

Vue.component('my-component', {
  template: '&lt;div&gt;{{message}}&lt;/div&gt;',
  data() {
    return {
      message: '全局自定义组件！'
    }
  }
})
      </code>
    </pre>
    <pre>
      <code class="html">
// 调用
&lt;my-component&gt;&lt;/my-component&gt;
      </code>
    </pre>

    <div class="demo-box">
      <component1 v-on:onCounter="onCounter" :counter="counter"></component1>
      <component1 v-on:onCounter="onCounter" :counter="counter"></component1>
      <component1 v-on:onCounter="onCounter" :counter="counter"></component1>
    </div>

    <div class="demo-box">
      <input type="text" v-model="myMessage">
      <component2 :my-message="myMessage"></component2>
    </div>
  </div>
</template>
<style scoped>
.pic {
  width: 300px;
  height: 300px;
  background: url('./props-events.png') no-repeat;
  background-size: contain;
}
</style>
<script>
  import component1 from './component1.vue'
  import component2 from './component2.vue'

  export default {
    props: [],
    data() {
      return {
        counter: 1,
        myMessage: ''
      }
    },
    methods: {
      onCounter() {
        this.counter += 1
      },

    },
    components: {
      component1,
      component2
    }
  }

</script>
