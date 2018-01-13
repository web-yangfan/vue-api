<template>
  <div class="container">
    <h3>extends</h3>
    <ul>
      <li><strong>参数:</strong><code>Object | Function</code></li>
      <li>
        <strong>详情：</strong>
        <ol>
          <li>允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 <code>Vue.extend</code>。这主要是为了便于扩展单文件组件。</li>
          <li>这和 <code>mixins</code> 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级。</li>
          <li class="warning">extends可以继承一个组件，可以覆盖里面方法，或扩展里面的方法</li>

        </ol>
      </li>
    </ul>

    <h5>例子: 继承覆盖element-ui组件</h5>
 <pre v-pre>
   <code>
     // element-ui库是安装到 node_modules里，transfer是element-ui的穿梭框组件
     import newTransfer from &#x27;element-ui/packages/transfer/src/main.vue&#x27;;
     let newComponent = {
       extends: newTransfer
     }
     export default {
       components: {
         newComponent
        }
     }
   </code>
 </pre>
    <h5>例子：</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;new-component&gt;&lt;/new-component&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import testComponent from &#x27;./extends-component.vue&#x27;

  let newComponent = {
    extends: testComponent,
    computed: {
      count: function () {
        this.str = &#x27;通过extends方式继承组件，并且改写computed中的count方法&#x27;
        return this.str
      }
    },
    methods: {
      handlerClick () {
        this.clickStr = &#x27;通过extends方式继承组件 覆盖methods中的方法&#x27;
      }
    }
  }

  export default {
    components: {
      newComponent
    }
  }
&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;

&lt;!-- extends-component.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;使用computed改变data中的数据&lt;/p&gt;
    &lt;p&gt;{{count}}&lt;/p&gt;
    &lt;p&gt;{{sum}}&lt;/p&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;button type=&quot;text&quot; @click=&quot;handlerClick&quot;&gt;点击&lt;/button&gt;
    &lt;span&gt;{{clickStr}}&lt;/span&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        str: &#x27;原始数据&#x27;,
        clickStr: &#x27;没有被点击&#x27;
      }
    },
    computed: {
      count: function () {
        this.str = &#x27;computed计算后的数据&#x27;
        return this.str
      },
      sum: function () {
        return &#x27;computed中没有被覆盖的方法&#x27;
      }
    },
    mounted () {
    },
    methods: {
      handlerClick () {
        this.clickStr = &#x27;被点击的后的数据&#x27;
      }
    },
    watch: {}
  }
&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;

      </code>
    </pre>
    <div class="demo-box">
      <demon-component></demon-component>
    </div>
  </div>
</template>

<script>
  import demonComponent from './demo1.vue'
  export default {
    name: 'index',
    components: {
      demonComponent
    },
    props: [],
    data () {
      return {}
    },
    mounted () {
    },
    methods: {},
    watch: {}
  }
</script>

<style scoped>

</style>
