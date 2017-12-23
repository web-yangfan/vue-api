<template>
  <div class="container">
    <h3>vm.$emit( event, […args] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{string} event</code></li>
          <li><code>[...args]</code></li>
        </ol>
      </li>
      <li><strong>用法:</strong> 子组件用$emit()来触发父组件的事件</li>
    </ul>

    <h5>例子：$emit()和v-on:(简写：@)</h5>
    <pre v-pre class="mb48">
      <code class="html">
&lt;!-- 父组件--&gt;
&lt;div class=&quot;demo-box&quot;&gt;
  &lt;p&gt;总数: {{total}}&lt;/p&gt;
  &lt;demo @parentAdd=&quot;parentAdd&quot;&gt;&lt;/demo&gt;
&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
  import demo from './demo1.vue'
  export default {
    data() {
      return {
        total: 0
      }
    },
    methods: {
      parentAdd (total) {
        this.total = total
      }
    },
    components: {
      demo
    }
  }
      </code>
    </pre>


    <pre v-pre>
      <code class="html">
 &lt;!-- 子组件--&gt;
 &lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;add&quot;&gt;子组件按钮&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
 export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      add () {
        this.counter++
        this.$emit('parentAdd', this.counter)
      }
    }
  }
      </code>
    </pre>

    <div class="demo-box">
      <p>总数: {{total}}</p>
      <demo @parentAdd="parentAdd"></demo>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import demo from './demo1.vue'
  export default {
    data() {
      return {
        total: 0
      }
    },
    methods: {
      parentAdd (total) {
        this.total = total
      }
    },
    components: {
      demo
    }
  }
</script>
