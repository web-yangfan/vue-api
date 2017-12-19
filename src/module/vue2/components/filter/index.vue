<template>
  <div class="container">
    <h3>Vue.filter( id, [definition] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{string} id</code></li>
          <li><code>{Function} [definition]</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>注册或获取全局过滤器</span></li>
      <li><strong class="warning">注意:</strong>Vue.filter 注册全局过滤器。filters 是注册局部过滤器 </li>
    </ul>
    <h5>例子：</h5>
    <pre>
      <code class="js">
// 注册全局过滤器
Vue.filter('filterA', (value) => {
  return value + '-filterA'
})

Vue.filter('filterB', (value) => {
  return value + '-filterB'
})
      </code>
    </pre>
    <pre>
      <code class="js">
// 注册局部过滤器
  export default {
    props: [],
    data() {
      return {}
    },
    filters: {
      filterA(value) {
        return value + '-filterA'
      },
      filterB(value) {
        return value + '-filterB'
      }
    },
  }
      </code>
    </pre>

    <pre v-pre>
      <code class="html">
&lt;!-- 过滤器可以串联 --&gt;
&lt;p&gt;{{ message | filterA | filterB }}&lt;/p&gt;


&lt;!-- 过滤器是 JavaScript 函数，因此可以接收参数：--&gt;
&lt;p&gt;{{ message | filterA('arg1', arg2) }}&lt;/p&gt;

&lt;!-- in v-bind --&gt;
&lt;div v-bind:id=&quot;rawId | formatId&quot;&gt;&lt;/div&gt;
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
    }
  }
</script>
