<template>
  <div class="container">
    <h3>修饰符</h3>
    <ul>
      <li>
        <ol>
          <li><strong>.lazy:</strong> <code>.lazy会转变为change事件中同步，但不是实时的，在失去焦点或按回车时才更新</code></li>
          <li><strong>.number:</strong> <code>input数组的输入的数字是 string类型，<em style="color: blueviolet"> .number 可以把输入的数字</em> 转换成 Number类型</code></li>
          <li><strong>.trim:</strong> <code>使用 v-model.trim="data" 可以去掉收尾空格</code></li>
          <li><strong>v-model(语法糖方式)和$emit组合使用</strong></li>
        </ol>
      </li>
    </ul>

    <h5 class="pb10">例子：lazy、number</h5>
    <pre v-pre>
      <code class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;label&gt;
      &lt;input type=&quot;text&quot; v-model.lazy=&quot;lazyMessage&quot; placeholder=&quot;lazy&quot;&gt;
      &lt;p&gt;{{lazyMessage}}&lt;/p&gt;
    &lt;/label&gt;
    &lt;br&gt;
    &lt;label&gt;
      &lt;input type=&quot;number&quot; v-model.number=&quot;numberMessage&quot; placeholder=&quot;number&quot;&gt;
      &lt;p&gt;{{typeof numberMessage}}&lt;/p&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/template&gt;
      </code>
    </pre>
    <div class="demo-box">
      <demo4></demo4>
    </div>



    <br>
    <h5 class="pb10">使用@input，输入中文，没有选中汉字，也会触发</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input type=&quot;text&quot; @input=&quot;handlerInput&quot; /&gt;
    &lt;p&gt;输入的内容是：{{message}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: [],
    data () {
      return {
        message: &#x27;&#x27;
      }
    },
    methods: {
      handlerInput (e) {
        this.message = e.target.value
      }
    }
  }
&lt;/script&gt;

      </code>
    </pre>
    <div class="demo-box">
      <demo1></demo1>
    </div>

    <h5 class="pb10">radio、checkbox、select等表单直接使用v-model，不用加name属性</h5>
    <pre v-pre>
      <code class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;label style=&quot;margin-right: 10px&quot;&gt;
      &lt;input type=&quot;radio&quot; v-model=&quot;gender&quot; value=&quot;男&quot;&gt; 男
    &lt;/label&gt;

    &lt;label&gt;
      &lt;input type=&quot;radio&quot; v-model=&quot;gender&quot; value=&quot;女&quot;&gt; 女
    &lt;/label&gt;
    &lt;p&gt;{{gender}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
      </code>
    </pre>
    <div class="demo-box">
      <demo2></demo2>
    </div>

    <h5 class="pb10">checkbox :true-value和:false-value使用</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;label style=&quot;margin-right: 10px&quot;&gt;
      &lt;input type=&quot;checkbox&quot; v-model=&quot;toggle&quot;  :true-value=&quot;value1&quot; :false-value=&quot;value2&quot;&gt; 男
    &lt;/label&gt;
    &lt;p&gt;{{toggle}}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: [],
    data () {
      return {
        toggle: false,
        value1: &#x27;选中了&#x27;,
        value2: &#x27;没有选中&#x27;
      }
    },
    methods: {
    }
  }
&lt;/script&gt;

      </code>
    </pre>
    <div class="demo-box">
      <demo3></demo3>
    </div>

    <h5 class="pb10">例子：v-model(语法糖方式)和$emit组合使用</h5>
    <pre v-pre>
      <code >
&lt;template&gt;
&lt;!-- 父组件--&gt;
  &lt;div&gt;
      &lt;span&gt;总数：{{total}}&lt;/span&gt;
      &lt;p&gt;-------下面元素都是子组件内容---------&lt;/p&gt;
      &lt;demo5 v-model=&quot;total&quot;&gt;&lt;/demo5&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import demo5 from &#x27;./demo5.vue&#x27;
  export default {
    props: [],
    data () {
      return {
        total: 0
      }
    },
    components: {
      demo5
    },
  }
&lt;/script&gt;
      </code>
    </pre>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!-- 子组件--&gt;
  &lt;div&gt;
    &lt;p&gt;显示父组件total 值:{{this.value}}&lt;/p&gt;
    &lt;button @click=&quot;add&quot;&gt;子组件按钮&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: ['value'],
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      add () {
        this.counter++
        this.$emit(&#x27;input&#x27;, this.counter)
      }
    }
  }
&lt;/script&gt;

      </code>
    </pre>
    <div class="demo-box">
      <span>总数：{{total}}</span>
      <p>-------下面元素都是子组件内容---------</p>
      <demo5 v-model="total"></demo5>
    </div>
    <br>

    <h5 class="pb10">例子：普通v-model和$emit组合使用</h5>
    <pre v-pre>
      <code>
  &lt;template&gt;
    &lt;!-- 父组件 --&gt;
    &lt;div class=&quot;demo-box&quot;&gt;
       &lt;demo6 :test-age=&quot;age&quot; @addTogether=&quot;addTogether&quot;&gt;&lt;/demo6&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
    import demo6 from &#x27;./demo6.vue&#x27;
    export default {
      data () {
        return {
          age: 100
        }
      },
      methods: {
        addTogether (num) {
          this.age = num
        }
      },
      components: {
        demo6
      }
    }
  &lt;/script&gt;
      </code>
    </pre>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!-- 子组件 --&gt;
  &lt;div&gt;
    &lt;p&gt;父组件传过来的数据 {{testAge}}&lt;/p&gt;
    &lt;button @click=&quot;add&quot;&gt;子组件按钮&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: [&#x27;testAge&#x27;],
    data () {
      return {
        num: 10
      }
    },
    methods: {
      add () {
        // 调用父组件传过来的方法
        this.num++
        this.$emit(&#x27;addTogether&#x27;, this.num)
      }
    }
  }
&lt;/script&gt;

      </code>
    </pre>
    <div class="demo-box">
      <demo6 :test-age="age" @addTogether="addTogether"></demo6>
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
  import demo5 from './demo5.vue'
  import demo6 from './demo6.vue'
  export default {
    props: [],
    data () {
      return {
        total: 0,
        age: 100
      }
    },
    mounted () {
    },
    methods: {
      addTogether (num) {
        this.age = num
      }
    },
    components: {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      demo6
    },
    watch: {}
  }
</script>
