<template>
  <div class="container">
    <h3>Vue.nextTick( [callback, context] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{Function} [callback]</code></li>
          <li><code>{Object} [context]</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</span></li>
      <li><strong class="warning">注意:</strong> 除此之外，也有一个实例方法 <code>vm.$nextTick()</code>。这个方法和全局的  <code>Vue.nextTick</code> 功能一样，但更方便在组件内部使用，因为它不需要全局的 Vue 变量，另外它的回调函数的 <code>this</code> 上下文会自动绑定到调用它的 Vue </li>
    </ul>
    <h5>示例：</h5>
    <pre v-pre>
      <code class="html">
&lt;div id=&quot;example&quot;&gt;{{msg}}&lt;/div&gt;

&lt;script&gt;
var vm = new Vue({
  el: &#x27;#example&#x27;,
  data: {
    msg: &#x27;123&#x27;
  }
})
vm.msg = &#x27;new message&#x27; // change data
Vue.nextTick(function () {
  alert(&#x27;DOM 将会已经是更新后的状态了&#x27;)
})
&lt;/script&gt;
      </code>
    </pre>
    <h5>示例：</h5>
    <pre>
      <code class="html">
&lt;ul id=&quot;demo&quot;&gt;
    &lt;li v-for = &quot;item in list&quot;&gt;&lt;/div&gt;
&lt;/ul&gt;

&lt;script&gt;
  new Vue({
    el:&#x27;#demo&#x27;,
    data: {
        list = [0,1,2,3,4,5,6,7,8,9,10]
    },
    methods: {
      push:function() {
        this.list.push(11);
        Vue.nextTick(function() {
            alert(&#x27;数据已经更新&#x27;)
        });
      }
    }
 })
&lt;/script&gt;
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
