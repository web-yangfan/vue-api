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
 <div>
  <pre v-pre>
    <code>

    </code>
  </pre>

 </div>
    <div class="demo-box">
      <p>单个&lt;slot&gt;</p>
      <demo1>
        <div>分发的内容</div>
        <div>更多分发的内容</div>
      </demo1>
    </div>




    <div class="demo-box">
      <p>给&lt;slot&gt;元素指定一个name后可以分发多个内容，具名Slot可以与单个Slot共存，例如下面例子</p>
      <demo2>
        <h2 slot="header">标题</h2>
        <p>正文内容</p>
        <p>更多的正文内容</p>
        <div slot="footer">底部信息</div>
      </demo2>
    </div>

    <div class="demo-box">
      <p>作用域插槽 slot-scope可以应用所有标签，不建议使用scope</p>
      <demo3>
        <div slot-scope="props">
          <p>来自父组件的内容</p>
          <p>{{props.msg}}</p>
        </div>
      </demo3>
    </div>

    <div class="demo-box">
      <demo4 :books="books">
        <!-- 作用域插槽也可以是具名Slot -->
        <template slot="fanfan" slot-scope="props">
          <li>{{props.bookCname}}</li>
        </template>
      </demo4>
    </div>


    <div class="demo-box">
      <p>$slots</p>
      <demo5>
        <h2 slot="header"></h2>
        <p>正文内容</p>
        <p>更多的正文内容</p>
        <div slot="footer">底部信息</div>
      </demo5>
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
  export default {
    data () {
      return {
        message: '',
        books: [
          {
            name: '《vue.js实战》',
            cname: '艾斯'
          },
          {
            name: '《javaScript 语言精髓》',
            cname: '艾斯'
          },
          {
            name: '《vue.js 高级程序设计》',
            cname: '艾斯'
          }
        ]
      }
    },
    components: {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5
    }
  }
</script>
