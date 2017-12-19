<template>
  <div class="container">
    <h3>key属性</h3>
    <ul>
      <li>说明:<code>key属性可以让你决定是否复用元素，key属性的值必须是唯一的</code></li>
    </ul>
    <h5>例子1: 没有加key属性</h5>
    <br>
    <div class="demo-box">
      <demo1></demo1>
    </div>
    <h5>例子1: 加了key属性</h5>
    <br>
    <demo2></demo2>
    <br>
    <pre v-pre>
      <code class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;template v-if=&quot;type === &#x27;name&#x27; &quot;&gt;
      &lt;label&gt;用户名&lt;/label&gt;
      &lt;input type=&quot;text&quot; placeholder=&quot;请输入用户名&quot; key=&quot;name-input&quot;&gt;
    &lt;/template&gt;

    &lt;template v-else&gt;
      &lt;label&gt;邮箱&lt;/label&gt;
      &lt;input type=&quot;text&quot; placeholder=&quot;请输入邮箱&quot; key=&quot;email-input&quot;&gt;
    &lt;/template&gt;
    &lt;button @click=&quot;handleToggleClick&quot;&gt;切换输入类型&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
      </code>
      <code class="js">
&lt;script&gt;
  export default {
    data () {
      return {
        type: &#x27;name&#x27;
      }
    },
    methods: {
      handleToggleClick () {
        this.type = this.type === &#x27;name&#x27; ? &#x27;mall&#x27; : &#x27;name&#x27;
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
  import demo1 from './dmeo1.vue'
  import demo2 from './dmeo2.vue'
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
      demo2
    },
    watch: {}
  }
</script>
