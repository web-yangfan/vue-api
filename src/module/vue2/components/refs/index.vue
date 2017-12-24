<template>
  <div class="container">
    <h3>$refs 子组件索引</h3>
    <ul>
      <li><strong>说明:</strong> <span>父组件通过$refs 来访问子组件实例,配合ref使用</span></li>
      <li><strong class="warning">警告:</strong> <code>$refs只有在组件渲染完成后才填充，并且它是非响应式的，它仅仅作为一个直接访问子组件的应急方案，应当避免在模板或计算属性中使用$refs</code></li>
    </ul>
    <h5>例子：</h5>
    <pre class="mb48" v-pre>
      <code class="html">
&lt;template&gt;
    &lt;div class=&quot;demo-box&quot;&gt;
      &lt;!-- 父组件 --&gt;
      &lt;demo ref=&quot;demo1&quot;&gt;&lt;/demo&gt;
      &lt;button @click=&quot;handlerEvent&quot;&gt;父组件按钮&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
  import demo from &#x27;./demo.vue&#x27;
  export default {
    methods: {
      handlerEvent () {
        this.$refs.demo1.message = &#x27;父组件改变了我&#x27;
      }
    },
    components: {
      demo
    }
  }
      </code>
    </pre>

    <pre class="mb48" v-pre>
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
      <demo ref="demo1"></demo>
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
        this.$refs.demo1.message = '父组件改变了我'
      }
    },
    components: {
      demo
    }
  }
</script>
