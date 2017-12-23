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
      <li><strong class="warning">注意:</strong>通过props给子组件传递数据，通过"v-on"（简写:@）传递方法, 在子组件用$emit调用</li>
      <li>
        父子组件的关系可以总结为 props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息
        <p class="pic"></p>
      </li>
    </ul>

    <h5>例子1：使用属性：is来挂载组件</h5>
    <pre style="margin-bottom: 0; padding-bottom: 0">
      <code class="html">
&lt;div id=&quot;app&quot;&gt;
  &lt;tabel&gt;
    &lt;tbody is=&quot;my-component&quot;&gt;&lt;/tbody&gt;
  &lt;/tabel&gt;
&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
Vue.component('my-component', {
  template: '&lt;div&gt;我是组件中的内容&lt;/div&gt;'
})
let app =new Vue({
  el: '#app'
})
      </code>
    </pre>
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
  export default {
    props: [],
    data () {
      return {
        counter: 1,
        myMessage: ''
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>
