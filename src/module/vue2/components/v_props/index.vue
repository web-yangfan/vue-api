<template>
  <div class="container">
    <h3>props</h3>
    <ul>
      <li><strong>类型:</strong>
        <ol>
          <li><code>Array string | object</code></li>
        </ol>
      </li>
      <li><strong>用法:</strong> <span>注册或获取全局组件。注册还会自动使用给定的 <code>id</code>设置组件的名称</span></li>
      <li><strong class="warning">注意:</strong>props 可以是数组或对象，用于接收来自父组件的数据 <span class="warning">驼峰命名(camelCase)的props名称要转为短横分隔命名(kebab-case)</span></li>
      <li><code>vue2通过props传递数据是单向的，组件数据变化时会传递给子组件，反过来就不行</code></li>
    </ul>

    <h5>例子: 父组件改变数据，传递给子组件</h5>

    <pre v-pre class="mb48">
      <code class="html">
&lt;!-- 父组件--&gt;
&lt;input type=&quot;text&quot; v-model=&quot;warningText&quot;&gt;
&lt;my-component :warning-text=&quot;warningText&quot;&gt;&lt;/my-component&gt;
      </code>
    </pre>

    <pre>
      <code class="hljs">
  import myComponent from './myComponent.vue'
  export default {
    name: 'index',
    props: [],
    data () {
      return {
        warningText: 'props传递数据'
      }
    },
    components: {
      myComponent
    }
  }
      </code>
    </pre>

    <pre v-pre class="mb48">
      <code class="html">
&lt;!-- 子组件--&gt;
&lt;div&gt;
  &lt;p&gt;子组件：{{warningText}}&lt;/p&gt;
&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
// 子组件
export default {
  name: 'my-component',
  props: ['warningText']
}
      </code>
    </pre>

    <div class="demo-box">
      <input type="text" v-model="warningText">
      <my-component :warning-text="warningText"></my-component>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import myComponent from './myComponent.vue'
  export default {
    name: 'index',
    props: [],
    data () {
      return {
        warningText: 'props传递数据'
      }
    },
    components: {
      myComponent
    }
  }
</script>
