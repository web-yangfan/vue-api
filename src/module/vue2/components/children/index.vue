<template>
  <div class="container">
    <h3>$children</h3>
    <ul>
      <li><strong>说明:</strong> <span>可以直接访问该子组件的实例或组件，可以递归向下无限访问，直最底层根实例</span></li>
      <li><strong class="warning">警告:</strong> <code>$children 需要遍历，如果组件比较多的时候，比较麻烦，尤其是组件动态渲染时。可以使用ref和$refs取代 $children</code></li>
    </ul>

<pre v-pre class="mb48">
  <code class="html">
&lt;template&gt;
  &lt;div class=&quot;demo-box&quot;&gt;
      &lt;!-- 父组件 --&gt;
      &lt;demo&gt;&lt;/demo&gt;
      &lt;button @click=&quot;handlerEvent&quot;&gt;父组件按钮&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
  </code>
</pre>
<pre>
  <code class="hljs">
  import demo from './demo.vue'
  export default {
    methods: {
      handlerEvent () {
        this.$children.forEach((item, index) => {
          item.message = '父组件改变了我'
        })
      }
    },
    components: {
      demo
    }
  }
  </code>
</pre>

<pre v-pre class="mb48">
  <code class="html">
&lt;template&gt;
  &lt;!-- 子组件 --&gt;
  &lt;div&gt;
    {{message}}
  &lt;/div&gt;
&lt;/template&gt;
  </code>
</pre>

<pre>
  <code class="hljs">
  export default {
    name: 'demo1',
    data () {
      return {
        message: '我是子组件内容'
      }
    }
  }
  </code>
</pre>


    <div class="demo-box">
      <!-- 父组件 -->
      <demo></demo>
      <button @click="handlerEvent">父组件按钮</button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import demo from './demo.vue'
  export default {
    methods: {
      handlerEvent () {
        this.$children.forEach((item, index) => {
          item.message = '父组件改变了我'
        })
      }
    },
    components: {
      demo
    }
  }
</script>
