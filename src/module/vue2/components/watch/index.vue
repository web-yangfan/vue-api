<template>
  <div class="container">
    <h3>watch | vm.$watch</h3>
    <ul>
      <li><strong>参数：</strong>
        <ol>
          <li><code>{ [key: string]: string | Function | Object | Array }</code></li>
          <li><code>deep:</code> 为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。</li>
          <li><code>immediate</code> 在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：</li>
        </ol>
      </li>
      <li><strong>详细:</strong> <span>一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 <code>$watch()</code>，遍历 <code>watch</code> 对象的每一个属性。</span></li>
      <li><code>vm.$watch</code> 和 <code>watch</code> 区别一个全局和一个是局部</li>
      <li><span class="warning">注意:</span>不应该使用箭头函数来定义 watcher 函数</li>
    </ul>
    <h5>例子：</h5>
    <pre v-pre>
        <code>
 var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: function (val, oldVal) { /* ... */ },
      immediate: true
    },
    e: [
      function handle1 (val, oldVal) { /* ... */ },
      function handle2 (val, oldVal) { /* ... */ }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
        </code>
      </pre>
    <h5>例子：</h5>
    <pre v-pre>
      <code>
// 键路径
vm.$watch('a.b.c', function (newVal, oldVal) {
  // 做点什么
})

// 函数
vm.$watch(
  function () {
    return this.a + this.b
  },
  function (newVal, oldVal) {
    // 做点什么
  }
)

// vm.$watch 返回一个取消观察函数，用来停止触发回调：
var unwatch = vm.$watch('a', cb)
// 之后取消观察
unwatch()
      </code>
    </pre>
    <h5>例子：</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input type=&quot;text&quot; v-model=&quot;str1&quot; style=&quot;width: 200px&quot;&gt;
    &lt;p&gt;{{watchStr1}}&lt;/p&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;input type=&quot;text&quot; v-model=&quot;str2&quot; style=&quot;width: 200px&quot;&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;div&gt;
      &lt;p&gt;回调函数val和oldVal&lt;/p&gt;
      &lt;p&gt;&lt;code&gt;val&lt;/code&gt;: {{str2Val}}&lt;/p&gt;
      &lt;p&gt;&lt;code&gt;oldVal&lt;/code&gt;: {{str2OldVal}}&lt;/p&gt;
    &lt;/div&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;p&gt;josn对象监控&lt;/p&gt;
    &lt;input type=&quot;text&quot; v-model=&quot;str3Json.a&quot;&gt;
    &lt;p&gt;{{str3Json.b}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &#x27;demo1&#x27;,
    props: [],
    data () {
      return {
        str1: &#x27;通过watch监控输入框的变化&#x27;,
        watchStr1: &#x27;&#x27;,
        str2: &#x27;回调返回值&#x27;,
        str2Val: &#x27;&#x27;,
        str2OldVal: &#x27;&#x27;,
        str3Json: {
          a: &#x27;json监控&#x27;,
          b: &#x27;&#x27;
        }
      }
    },
    mounted () {
    },
    methods: {
      watchStr1Fn () {
        this.watchStr1 = this.str1
      }
    },
    watch: {
      &#x27;str1&#x27;: &#x27;watchStr1Fn&#x27;,
       str2: function (val, oldVal) {
        this.str2Val = val
        this.str2OldVal = oldVal
      },
      &#x27;str3Json.a&#x27;: function (val, oldVal) {
        this.str3Json.b = this.str3Json.a
      }

    }
  }
&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;

      </code>
    </pre>
    <div class="demo-box">
      <demo1></demo1>
    </div>
  </div>

</template>

<script>
  import demo1 from './demo1.vue'
  export default {
    props: [],
    components: {
      demo1
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
    },
    watch: {}
  }
</script>
