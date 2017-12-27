<template>
  <div class="container">
    <h3>$slot</h3>
    <ul>
      <li><strong>说明:</strong> <span>访问slot分发内容的方法</span></li>
    </ul>

    <h5>例子：this.$slots.default包括了所有没有包含在具名slot中的节点</h5>
    <pre v-pre class="mb48">
      <code class="html">
  &lt;template&gt;
    &lt;!-- 父组件 --&gt;
    &lt;demo1&gt;
      &lt;h2 slot=&quot;header&quot;&gt;&lt;/h2&gt;
        &lt;p&gt;正文内容&lt;/p&gt;
        &lt;p&gt;更多的正文内容&lt;/p&gt;
       &lt;div slot=&quot;footer&quot;&gt;底部信息&lt;/div&gt;
    &lt;/demo1&gt;
  &lt;/template&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
  import demo1 from './demo5.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      demo1
    }
  }
      </code>
    </pre>

    <pre v-pre class="mb48">
      <code>
    &lt;template&gt;
      &lt;!-- 子组件 --&gt;
      &lt;div&gt;
        &lt;div class=&quot;header&quot;&gt;
          &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
        &lt;/div&gt;

        &lt;div class=&quot;main&quot;&gt;
          &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;

        &lt;div class=&quot;footer&quot;&gt;
          &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
        &lt;/div&gt;

       &lt;/div&gt;
    &lt;/template&gt;
      </code>
    </pre>

    <pre >
      <code class="hljs">
  export default {
    props: [],
    data () {
      return {}
    },
    mounted () {
      var header = this.$slots.header
      var main = this.$slots.default
      var footer = this.$slots.footer
      console.log(footer)
      console.log(footer[0].elm.innerHTML)
    }
  }
      </code>
    </pre>
    <div class="demo-box">
      <demo1>
        <h2 slot="header"></h2>
        <p>正文内容</p>
        <p>更多的正文内容</p>
        <div slot="footer">底部信息</div>
      </demo1>
    </div>

  </div>
</template>

<style scoped>

</style>

<script>
  import demo1 from './demo5.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      demo1
    }
  }
</script>
