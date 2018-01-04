<template>
  <div class="container">
    <h3>extendhe</h3>
    <ul>
      <li><strong>参数:</strong><code>{Object} options</code></li>
      <li><strong>用法:</strong><span>使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。<code>data</code>选项是特例，需要注意 - 在<code>Vue.extend()</code>中它必须是函数</span></li>
    </ul>
    <!-- -----------------例子1------------------- -->
    <h5>例子1:</h5>
    <pre>
      <code class="html" v-pre>&lt;!-- 组件 --&gt;
&lt;template&gt;
  &lt;div&gt;
    {{text}}
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: [],
    data() {
      return {
        text: &#x27;新内容&#x27;
      }
    },
    methods: {},
  }
&lt;/script&gt;
      </code>
    </pre>
    <pre>
       <code class="html" v-pre>&lt;!-- 父组件调用 --&gt;
&lt;template&gt;
  &lt;div class=&quot;mount-point&quot;&gt;
    &lt;button @click=&quot;demo1&quot;&gt;点击&lt;/button&gt;
    &lt;p class=&quot;mount-point&quot; style=&quot;color: #287bde&quot;&gt;默认内容&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import component from &#x27;./component.vue&#x27;
  export default {
    methods: {
      demo1() {
        let Profile = Vue.extend(component)
        new Profile().$mount(&#x27;.mount-point&#x27;)
      },
    },
  }

&lt;/script&gt;
       </code>
    </pre>

    <div class="demo-box">
        <div class="mount-point">
          <button @click="demo1">点击</button>
          <p class="mount-point" style="color: #287bde">默认内容</p>
        </div>
    </div>
    <!-- -----------------例子2------------------- -->
    <h5>例子2: </h5>
    <pre>
      <code class="html" v-pre>&lt;!-- 子组件 --&gt;
&lt;template&gt;
  &lt;div class=&quot;extend-box&quot; v-if=&quot;isShow&quot;&gt;
    &lt;button @click=&quot;hide&quot;&gt;关闭&lt;/button&gt;
    &lt;div&gt;{{content}}&lt;/div&gt;
  &lt;/div&gt;

&lt;/template&gt;

&lt;style&gt;
  .extend-box{
    position: absolute;
    left: 50%;
    top: 50%;
    background: #eeeeee;
    width: 100px;
    height: 100px;
    z-index: 99999;
  }
&lt;/style&gt;

&lt;script&gt;
  /**
   * Modal.alert()
   */
  import Vue from &#x27;vue&#x27;
  let Layer = null

  export default {
    alert(str){
      let ele = document.querySelector(&#x27;.extend-box&#x27;)
      if(!ele) {
        ele=  document.createElement(&#x27;div&#x27;)
        ele.classList.add(&#x27;extend-box&#x27;)
        document.body.appendChild(ele)
      }
      if(!Layer){
        Layer = Vue.extend(this)
      }

      const Obj = new Layer()
      // 设置组件属性
      Obj.content = str


      // 手动调用vm.$mount()方法来挂载
      Obj.$mount(ele)
    },
    data(){
      return {
        isShow: true,
        content: &#x27;&#x27;
      }
    },
    methods: {
      hide: function() {
        this.isShow = false
      }
    }
  };

&lt;/script&gt;
      </code>
    </pre>

    <pre>
      <code class="html">&lt;!-- 父组件调用 --&gt;
&lt;template&gt;
  &lt;div class=&quot;demo-box&quot;&gt;
      &lt;button @click=&quot;demo2&quot;&gt;点击&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import model from &#x27;./component.vue&#x27;
  export default {
    methods: {
      demo2(){
        model.alert(&#x27;弹窗&#x27;)
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>
    <div class="demo-box">
      <button @click="demo2">点击</button>
    </div>
  </div>
</template>

<script>
  import component from './component.vue'
  import component1 from './component-1.vue'
  import Vue from 'vue'
  export default {
    props: [],
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      demo1 () {
        let Profile = Vue.extend(component)
        new Profile().$mount('.mount-point')
      },
      demo2 () {
        component1.alert('弹窗')
      }
    },
    components: {},
    watch: {}
  }
</script>
