<template>
  <div class="container">
    <h3>directive</h3>
    <ul>
      <li>
        <strong>参数:</strong>
        <ol>
          <li><code>{string} id</code></li>
          <li><code>{Function | Object} [definition]</code></li>
        </ol>
      </li>
      <li><strong class="warning">注意:</strong>
        1、directive全局注册和directives局部注册。 2、directive全局注册钩子函数 只有 bind 和 inserted有反应
      </li>
      <li>
        <strong>钩子函数:</strong>
        <ol>
          <li><code>bind</code>只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。</li>
          <li><code>inserted</code>被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。</li>
          <li><code>update</code>所在组件的 VNode 更新时调用，<strong>但是可能发生在其孩子的 VNode 更新之前。</strong>指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。</li>
          <li><code>componentUpdated</code>所在组件的 VNode <strong>及其孩子的 VNode</strong> 全部更新时调用。</li>
          <li><code>unbind</code>只调用一次， 指令与元素解绑时调用。</li>
        </ol>
      </li>
      <li>
        <strong>钩子函数参数</strong>
        <ol>
          <li>el: 指令所绑定的元素，可以用来直接操作 DOM 。</li>
          <li>
            binding: 一个对象，包含以下属性：
            <ol>
              <li><strong>name:</strong> 指令名，不包括 <code>v-</code> 前缀。</li>
              <li><strong>value: </strong>指令的绑定值， 例如： <code>v-my-directive="1 + 1"</code>, value 的值是 2。</li>
              <li><strong>oldValue: </strong>指令绑定的前一个值，仅在 <code>update</code>和 <code>componentUpdated</code> 钩子中可用。无论值是否改变都可用。</li>
              <li><strong>expression: </strong>绑定值的字符串形式。 例如 <code>v-my-directive="1 + 1"</code> ， <code>expression 的值是 "1 + 1"。</code></li>
              <li><strong>arg: </strong>传给指令的参数。例如 <code>v-my-directive:foo， arg 的值是 "foo"。</code></li>
              <li><strong>modifiers: </strong>一个包含修饰符的对象。 例如： <code>v-my-directive.foo.bar</code>, 修饰符对象 modifiers 的值是 <code>{ foo: true, bar: true }。</code></li>
            </ol>
          </li>
          <li>vnode: Vue 编译生成的虚拟节点，查阅 <a href="https://cn.vuejs.org/v2/api/#VNode接口" target="_blank">VNode API</a> 了解更多详情</li>
          <li>oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</li>
        </ol>
      </li>
      <li>
        <strong class="warning">注意:</strong>
        除了 <code>el</code> 之外，其它参数都应该是只读的，尽量不要修改他们。如果需要在钩子之间共享数据，建议通过元素的 <strong>dataset</strong> 来进行。
      </li>
    </ul>
    <h5>例子1:</h5>
    <pre>
      <code class="js">
 // 注册一个全局自定义指令 v-focus
  Vue.directive('focus', {
    bind() {
      console.log('bind')
    },
    // 当绑定元素插入到 DOM 中。
    inserted () {
      console.log('inserted')
    },
    update () {
      // 全局注册组件不执行
      console.log('update')
    },
    componentUpdated() {
      // 全局注册组件不执行
      console.log('componentUpdated')
    },
    unbind() {
      // 全局注册组件不执行
      console.log('unbind')
    }
  })
      </code>
    </pre>
    <pre>
      <code class="html">
// 调用
&lt;div v-focus&gt;&lt;/div&gt;
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
        demo1: {
          str: ''
        }
      }
    },
    mounted() {
    },
    methods: {},
    components: {},
    watch: {}
  }
</script>
