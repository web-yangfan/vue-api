<template>
  <div class="container">
    <h3>Vue.delete( target, key )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{Object | Array} target</code></li>
          <li><code>{string | number} key/index</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。</span></li>
      <li><strong class="warning">注意:</strong>: 目标对象不能是一个 Vue 示例或 Vue 示例的根数据对象。 </li>
    </ul>
    <h5>例子1:</h5>
    <pre v-pre>
      <code class="html">// 组件
&lt;template&gt;
  &lt;div&gt;
    {{text}}
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: [],
    data() {
      return {
        text: &#x27;新内容&#x27;
      }
    },
    methods: {},
  }
&lt;/script&gt;
      </code>
    </pre>

  </div>


</template>
<style lang="stylus" scoped>

</style>
<script>
  export default {
    props: [],
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {},
    components: {},
    watch: {}
  }

</script>
