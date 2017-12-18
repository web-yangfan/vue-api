<template>
  <div class="container">
    <h3>Vue.set( target, key, value )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{Object | Array} target</code></li>
          <li><code>{string | number} key</code></li>
          <li><code>{any} value</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。</span></li>
      <li><strong class="warning">注意:</strong>: 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象</li>
    </ul>
    <h5>例子1: 数组</h5>
    <pre v-pre>
      <code class="html">
&lt;div class=&quot;wrap&quot;&gt;{{test}}&lt;/div&gt;

&lt;script&gt;
var vm = new Vue({
  el: &#x27;.wrap&#x27;,
  data: {
    test: &#x27;我是set&#x27;
  },
});
// vm.data.test = "改变了" 这样是没有任何效果的
Vue.set(vm, &#x27;testName&#x27;, &#x27;改变了&#x27;)  // 改变了

&lt;/script&gt;
      </code>
    </pre>

    <h5>例子2:</h5>
    <pre v-pre>
      <code class="html">
&lt;div class=&quot;wrap&quot;&gt;{{user.age}}&lt;/div&gt;

&lt;script&gt;
var vm = new Vue({
  el: &#x27;.wrap&#x27;,
  data: {
    arr: [1, 2, 3, 4, 5];
  },
});

Vue.set(vm.arr, 1, '改变了')  // [1, '改变了', 3, 4, 5]

&lt;/script&gt;
      </code>
    </pre>
  </div>

</template>
<style>

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
    components: {

    }
  };

</script>
