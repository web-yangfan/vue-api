<template>
  <div class="container">
    <h3>Vue.compile( template )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{string} template</code></li>
        </ol>
      </li>
      <li><strong>用法:</strong> <span>在 render 函数中编译模板字符串。<strong class="warning">只在独立构建时有效</strong></span></li>
    </ul>
    <h5>例子：</h5>
    <pre v-pre>
      <code class="js">
var res = Vue.compile('&lt;div&gt;&lt;span&gt;{{msg}}&lt;/span&gt;&lt;/div&gt;')
new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
      </code>
    </pre>
  </div>
</template>
<style scoped>

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
