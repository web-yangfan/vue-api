<template>
  <div class="container">
    <h3>Vue.version</h3>
    <ul>
      <li><strong>说明:</strong> <span>提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。</span></li>
    </ul>
    <h5>例子：</h5>
    <pre>
      <code class="js">
var version = Number(Vue.version.split('.')[0])
if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}
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
