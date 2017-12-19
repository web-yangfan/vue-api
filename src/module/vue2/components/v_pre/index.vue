<template>
  <div class="container">
    <h3>v-pre</h3>
    <ul>
      <li v-pre><code>不会解析{{}}中的内容，包括{{}}</code></li>
    </ul>
    <h5>示例：</h5>
    <pre v-pre>
      <code class="html">
&lt;p&gt;{{这里面的内容不会被编译 两个大括号也会输出}}&lt;/p&gt;
      </code>
    </pre>


  </div>

</template>

<script>

  export default {
    props: [],
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {

    },
    components: {},
    watch: {}
  }

</script>
