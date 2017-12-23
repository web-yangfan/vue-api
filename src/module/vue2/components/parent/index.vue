<template>
  <div class="container">
    <h3>$parent</h3>
    <ul>
      <li><strong>说明:</strong> <span>可以直接访问该组件的父实例或组件，可以递归向上无限访问，直到根实例</span></li>
    </ul>

<pre v-pre class="mb48">
  <code class="html">
&lt;template&gt;
&lt;!-- 父组件 --&gt;
 &lt;div class=&quot;demo-box&quot;&gt;
    {{message}}
    &lt;demo&gt;&lt;/demo&gt;
&lt;/div&gt;
&lt;/template&gt;
  </code>
</pre>

<pre v-pre>
  <code class="js">
  import demo from './demo.vue'
  export default {
    data () {
      return {
        message: ''
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
    &lt;button @click=&quot;handlerEvent&quot;&gt;通过父链接直接修改数据&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
  </code>
</pre>

<pre v-pre>
  <code class="js">
  export default {
    methods: {
      handlerEvent () {
        this.$parent.message = '来自子组件的内容'
      }
    }
  }
  </code>
</pre>

    <div class="demo-box">
      {{message}}
      <demo></demo>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import demo from './demo.vue'
  export default {
    data () {
      return {
        message: ''
      }
    },
    components: {
      demo
    }
  }
</script>
