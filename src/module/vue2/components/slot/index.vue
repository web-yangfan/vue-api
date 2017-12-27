<template>
  <div class="container">
    <h3>slot</h3>
    <ul>
      <li><strong>说明:</strong> <span>可以直接访问该组件的父实例或组件，可以递归向上无限访问，直到根实例</span></li>
      <li>
        <strong class="warning">注意:</strong>
        <ol>
          <li><span>slot分发的内容，作用域是在父组件上的</span></li>
          <li><span>子组件&lt;slot&gt;内的备用内容，它的作用域是子组件本身</span></li>
        </ol>
      </li>
    </ul>
    <h5>例子：单个slot</h5>
    <pre v-pre class="mb48">
      <code class="html">
    &lt;template&gt;
    &lt;!-- 父组件 --&gt;
    &lt;demo1&gt;
      &lt;div&gt;分发的内容&lt;/div&gt;
      &lt;div&gt;更多分发的内容&lt;/div&gt;
    &lt;/demo1&gt;
    &lt;/template&gt;
      </code>
    </pre>
    <pre v-pre>
    <code class="hljs">
    import demo1 from './demo1.vue'
    export default {
      components: {
        demo1
      }
    }
    </code>
    </pre>
    <pre v-pre class="mb48">
    <code class="html">
    &lt;template&gt;
    &lt;!-- 子组件 --&gt;
    &lt;div&gt;
      &lt;slot&gt;
        &lt;p&gt;{{text1}}&lt;/p&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
    &lt;/template&gt;
    </code>
    </pre>
    <pre>
    <code class="hljs">
    export default {
      props: [],
      data () {
        return {
          text1: '如果父组件没有插入内容，我将作为默认出现'
        }
      },
      mounted () {
      },
      methods: {},
      components: {},
      watch: {}
    }
    </code>
    </pre>
    <div class="demo-box">
      <p>单个&lt;slot&gt;</p>
      <demo1>
        <div>分发的内容</div>
        <div>更多分发的内容</div>
      </demo1>
    </div>

    <h5>例子：给&lt;slot&gt;元素指定一个name后可以分发多个内容，具名Slot可以与单个Slot共存，例如下面例子</h5>
    <pre v-pre class="mb48">
      <code class="html">
  &lt;template&gt;
    &lt;!-- 父组件 --&gt;
    &lt;demo2&gt;
      &lt;h2 slot=&quot;header&quot;&gt;标题&lt;/h2&gt;
      &lt;p&gt;正文内容&lt;/p&gt;
      &lt;p&gt;更多的正文内容&lt;/p&gt;
      &lt;div slot=&quot;footer&quot;&gt;底部信息&lt;/div&gt;
    &lt;/demo2&gt;
  &lt;/template&gt;
      </code>
    </pre>
    <pre v-pre>
      <code class="hljs">
    import demo2 from './demo2.vue'
    export default {
      components: {
        demo2
      }
    }
      </code>
    </pre>
    <pre v-pre>
      <code class="html">
  &lt;template&gt;
    &lt;!-- 子组件 --&gt;
    &lt;div&gt;
      &lt;div class=&quot;header&quot;&gt;
        &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;slot&gt;&lt;/slot&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
      &lt;/div&gt;

    &lt;/div&gt;
  &lt;/template&gt;
    </code>
    </pre>
    <div class="demo-box">
      <demo2>
        <h2 slot="header">标题</h2>
        <p>正文内容</p>
        <p>更多的正文内容</p>
        <div slot="footer">底部信息</div>
      </demo2>
    </div>

    <h5>例子：作用域插槽, 使用slot-scope可以应用所有标签，不建议使用scope</h5>
    <pre v-pre class="mb48">
      <code class="html">
  &lt;template&gt;
    &lt;!-- 父组件 --&gt;
     &lt;demo3&gt;
        &lt;div slot-scope=&quot;props&quot;&gt;
          &lt;p&gt;来自父组件的内容&lt;/p&gt;
          &lt;p&gt;{{props.msg}}&lt;/p&gt;
        &lt;/div&gt;
      &lt;/demo3&gt;
  &lt;/template&gt;
      </code>
    </pre>
    <pre v-pre>
      <code class="hljs">
    import demo3 from './demo3.vue'
    export default {
      components: {
        demo3
      }
    }
      </code>
    </pre>
    <pre v-pre class="mb48">
      <code class="html">
    &lt;template&gt;
      &lt;!-- 子组件 --&gt;
      &lt;div&gt;
        &lt;slot :msg=&quot;childMsg&quot;&gt;&lt;/slot&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    </code>
    </pre>
    <pre>
      <code class="hljs">
    export default {
      props: [],
      data () {
        return {
          childMsg: '来自子组件的内容!!'
        }
      }
    }
      </code>
    </pre>
    <div class="demo-box">
      <demo3>
        <div slot-scope="props">
          <p>来自父组件的内容</p>
          <p>{{props.msg}}</p>
        </div>
      </demo3>
    </div>


    <h5>例子: 作用域插槽具名Slot</h5>
    <pre v-pre class="mb48">
      <code class="html">
  &lt;template&gt;
    &lt;!-- 父组件 --&gt;
     &lt;demo4 :books=&quot;books&quot;&gt;
        &lt;!-- 作用域插槽也可以是具名Slot --&gt;
        &lt;template slot=&quot;fanfan&quot; slot-scope=&quot;props&quot;&gt;
          &lt;li&gt;{{props.bookCname}} --- {{props.bookName}}&lt;/li&gt;
        &lt;/template&gt;
      &lt;/demo4&gt;
  &lt;/template&gt;
      </code>
    </pre>
    <pre v-pre>
      <code class="hljs">
    import demo4 from './demo4.vue'
    export default {
      data () {
        return {
          books: [
            {
              name: '《vue.js实战》',
              cname: '路飞'
            },
            {
              name: '《javaScript 语言精髓》',
              cname: '艾斯'
            },
            {
              name: '《vue.js 高级程序设计》',
              cname: '香克斯'
            }
          ]
        }
      },
      components: {
        demo4
      }
    }
      </code>
    </pre>
    <pre v-pre class="mb48">
      <code class="html">
    &lt;template&gt;
      &lt;!-- 子组件 --&gt;
      &lt;div&gt;
        &lt;ul&gt;
          &lt;slot name=&quot;fanfan&quot; v-for=&quot;fanfan in books&quot; :book-cname=&quot;fanfan.cname :book-name="fanfan.name"&quot;&gt;
            &lt;!-- 这里也可以默认 slot 内容 --&gt;
          &lt;/slot&gt;
        &lt;/ul&gt;
       &lt;/div&gt;
    &lt;/template&gt;
    </code>
    </pre>
    <pre>
      <code class="hljs">
    export default {
      props: ['books'],
      data () {
        return {
        }
      }
    }
      </code>
    </pre>
    <div class="demo-box">
      <demo4 :books="books">
        <!-- 作用域插槽也可以是具名Slot -->
        <template slot="fanfan" slot-scope="props">
          <li>{{props.bookCname}} --- {{props.bookName}}</li>
        </template>
      </demo4>
    </div>



  </div>
</template>

<style scoped>

</style>

<script>
  import demo1 from './demo1.vue'
  import demo2 from './demo2.vue'
  import demo3 from './demo3.vue'
  import demo4 from './demo4.vue'
  export default {
    data () {
      return {
        books: [
          {
            name: '《vue.js实战》',
            cname: '路飞'
          },
          {
            name: '《javaScript 语言精髓》',
            cname: '艾斯'
          },
          {
            name: '《vue.js 高级程序设计》',
            cname: '香克斯'
          }
        ]
      }
    },
    components: {
      demo1,
      demo2,
      demo3,
      demo4,
    }
  }
</script>
