<template>
  <div class="container">
    <h3>Vue.component( id, [definition] ) 和 components</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{string} id</code></li>
          <li><code>{Function | Object} [definition]</code></li>
        </ol>
      </li>
      <li><strong>用法:</strong> <span>注册或获取全局组件。注册还会自动使用给定的 <code>id</code>设置组件的名称</span></li>
      <li><strong class="warning">注意:</strong>通过props给子组件传递数据，通过"v-on"（简写:@）传递方法, 在子组件用$emit调用</li>
      <li><strong class="warning">注意:</strong><code>Vue.component</code> 注册全局组件，<code>components</code>注册局部组件</li>
      <li>
        父子组件的关系可以总结为 props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息
        <p class="pic"></p>
      </li>
    </ul>

    <h5>例子1：使用属性：is来挂载组件</h5>
    <pre style="margin-bottom: 0; padding-bottom: 0">
      <code class="html">
&lt;div id=&quot;app&quot;&gt;
  &lt;tabel&gt;
    &lt;tbody is=&quot;my-component&quot;&gt;&lt;/tbody&gt;
  &lt;/tabel&gt;
&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="hljs">
Vue.component('my-component', {
  template: '&lt;div&gt;我是组件中的内容&lt;/div&gt;'
})
let app =new Vue({
  el: '#app'
})
      </code>
    </pre>

    <h5>例子2：递归组件, 注意：只能用与Vue.component</h5>
<pre v-pre>
  <code>
&lt;div id=&quot;app&quot;&gt;
  &lt;p&gt;{{count}}&lt;/p&gt;
  &lt;child-component :count=&quot;1&quot;&gt;&lt;/child-component&gt;
&lt;/div&gt;

Vue.component('child-component', {
  'name': 'child-component',
   props: {
    count: {
      type: Number,
      default: 1
    }
   },
   template: `
     &lt;div class=&quot;child&quot;&gt;
       &lt;p&gt;{{count}}&lt;/p&gt;
       &lt;child-component :count=&quot;count + 1&quot; v-if=&quot;count &lt; 3&quot;&gt;&lt;/child-component&gt;
     &lt;/div&gt;
   `
});

new new({
  el: '#app'
})
  </code>
</pre>

    <h5>例子3：动态组件(components)</h5>
    <p class="orange">使用&lt;component&gt;动态的挂载不同的组件，使用is特性来选择要挂载的组件</p>
    <pre>
      <code v-pre>
&lt;template&gt;
  &lt;button @click=&quot;updateComponent(&#x27;firstTab1&#x27;)&quot;&gt;组件一&lt;/button&gt;
  &lt;button @click=&quot;updateComponent(&#x27;tab2&#x27;)&quot;&gt;组件二&lt;/button&gt;
  &lt;button @click=&quot;updateComponent(&#x27;tab3&#x27;)&quot;&gt;组件三&lt;/button&gt;
  &lt;component :is=&quot;currentView&quot;&gt;&lt;/component&gt;
&lt;/template&gt;

&lt;script&gt;
  import tab1 from './tab1.vue'
  import tab2 from './tab2.vue'
  import tab3 from './tab3.vue'
  export default {
    data () {
      return {
        currentView: 'firstTab1'
      }
    },
    methods: {
      updateComponent (name) {
        this.currentView = name
      }
    },
    components: {
      // 自定组件名称
      'firstTab1': tab1,
      tab2,
      tab3
    }
  }
&lt;/script&gt;
      </code>
    </pre>
    <pre v-pre>
      <code>
&lt;!-- tab1 组件--&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;updataText&quot;&gt;tab1按钮&lt;/button&gt;
    &lt;p&gt;{{message}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab1按钮'
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>
    <pre v-pre>
      <code>
&lt;!-- tab2 组件--&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;updataText&quot;&gt;tab2按钮&lt;/button&gt;
    &lt;p&gt;{{message}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab2按钮'
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>
    <pre v-pre>
      <code>
&lt;!-- tab3 组件--&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;updataText&quot;&gt;tab3按钮&lt;/button&gt;
    &lt;p&gt;{{message}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      updataText () {
        this.message = '点击了tab3按钮'
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>

    <div class="demo-box">
      <button @click="updateComponent('firstTab1')">组件一</button>
      <button @click="updateComponent('tab2')">组件二</button>
      <button @click="updateComponent('tab3')">组件三</button>
      <br><br>
      <component :is="currentView"></component>
    </div>

    <h5>例子3：异步组件</h5>
 <pre v-pre>
   <code>
&lt;div id=&quot;app&quot;&gt;
   &lt;child-component&gt;&lt;/child-component&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.componet('child-component', function (resolve, reject) {
  window.setTimeout(function () {
    resolve({
      template: '&lt;div&gt;我是异步渲染的&lt;/div&gt;'
    })
  }, 2000)
});

var app = new vue({
  el: '#app'
})

&lt;/script&gt;
   </code>
 </pre>
  </div>
</template>
<style scoped>
.pic {
  width: 300px;
  height: 300px;
  background: url('./props-events.png') no-repeat;
  background-size: contain;
}
</style>
<script>
  import tab1 from './tab1.vue'
  import tab2 from './tab2.vue'
  import tab3 from './tab3.vue'
  export default {
    props: [],
    data () {
      return {
        counter: 1,
        myMessage: '',
        currentView: 'firstTab1'
      }
    },
    methods: {
      updateComponent (name) {
        this.currentView = name
      }
    },
    components: {
      // 自定组件名称
      'firstTab1': tab1,
      tab2,
      tab3
    }
  }
</script>
