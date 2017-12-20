<template>
  <div class="container">
    <h3>v-for</h3>
    <ul>
      <li v-pre>说明:<code>遍历数组/对象</code></li>
    </ul>
    <h5>示例：遍历数组</h5>
    <pre v-pre>
      <code class="html">
&lt;ul&gt;
  &lt;li v-for=&quot;v in names&quot;&gt;{{v.name}}&lt;/li&gt;
&lt;/ul&gt;

 &lt;ul&gt;
  &lt;li v-for=&quot;(v, index) in names&quot;&gt;{{index}}---{{v.name}}&lt;/li&gt;
&lt;/ul&gt;

&lt;ul&gt;
  &lt;template v-for=&quot;(v, index) in names&quot;&gt;
    &lt;li&gt;{{index}}---{{v.name}}&lt;/li&gt;
    &lt;li&gt;{{index}}---{{v.name}}&lt;/li&gt;
  &lt;/template&gt;
&lt;/ul&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
data () {
  return {
    names: [
      {name: '艾斯'},
      {name: '路飞'},
      {name: '香克斯'},
    ]
  }
},
      </code>
    </pre>

    <h5>示例：遍历对象</h5>
    <pre v-pre>
      <code class="html">
&lt;ul&gt;
  &lt;li v-for=&quot;value in user&quot;&gt;{{value}}&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- 遍历对象属性时，有两个可选参数，键名和索引 --&gt;
&lt;ul&gt;
  &lt;li v-for=&quot;(value, key, index) in user&quot;&gt;
    {{value}} {{key}} {{index}}
  &lt;/li&gt;
&lt;/ul&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
data () {
  return {
    user: {
      name: '艾斯',
      gender: '男',
      age: '23'
    }
  }
},
      </code>
    </pre>
  </div>

</template>

<script>
  export default {
    props: [],
    data () {
      return {
        user: {
          name: '艾斯',
          gender: '男',
          age: '23'
        }
      }
    },
    mounted () {
    },
    methods: {
    },
    components: {},
  }
</script>

<style scoped>

</style>
