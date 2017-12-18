<template>
  <div class="container">
    <h3>vm.$nextTick( [callback] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{Function} [callback]</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</span></li>
      <li><strong class="warning">注意:</strong> 实例方法 <code>vm.$nextTick()</code>。这个方法和全局的  <code>Vue.nextTick</code> 功能一样，但更方便在组件内部使用，因为它不需要全局的 Vue 变量，另外它的回调函数的 <code>this</code> 上下文会自动绑定到调用它的 Vue </li>
    </ul>
    <h5>示例：</h5>
    <div class="demo-box">
      <p class="warning">{{text}}</p>
      <ul>
        <li v-for="v in listData">{{v}}</li>
      </ul>
      <button @click="updateDate" v-if="!text">点击</button>
    </div>
    <pre v-pre>
      <code class="html">
&lt;div class=&quot;demo-box&quot;&gt;
  &lt;p class=&quot;warning&quot;&gt;{{text}}&lt;/p&gt;
  &lt;ul&gt;
    &lt;li v-for=&quot;v in listData&quot;&gt;{{v}}&lt;/li&gt;
  &lt;/ul&gt;
  &lt;button @click=&quot;updateDate&quot; v-if=&quot;!text&quot;&gt;点击&lt;/button&gt;
&lt;/div&gt;
      </code>
    </pre>

    <pre>
      <code class="js">
export default {
    props: [],
    data() {
      return {
        listData: ['艾斯', '路飞', '香克斯'],
        text: ''
      }
    },
    mounted() {
    },
    methods: {
      updateDate() {
        this.listData = ['艾斯', '路飞', '香克斯']
        let arr = ['索罗', '娜美', '罗宾']
        this.text = '点击按钮后5秒后更新'
        setTimeout(() => {
          this.listData.push(...arr)
          // DOM更新完毕后执行
          this.$nextTick( () => {
            // DOM 现在更新了
            this.updateAfter()
          })
        }, 5000)
      },
      updateAfter() {
        this.text = '更新完成'
      }
    },
    components: {},
    watch: {}
  }
      </code>
    </pre>
  </div>

</template>

<script>

  export default {
    props: [],
    data() {
      return {
        listData: ['艾斯', '路飞', '香克斯'],
        text: ''
      }
    },
    mounted() {
    },
    methods: {
      updateDate() {
        this.listData = ['艾斯', '路飞', '香克斯']
        let arr = ['索罗', '娜美', '罗宾']
        this.text = '点击按钮后5秒后更新'
        setTimeout(() => {
          this.listData.push(...arr)
          // DOM更新完毕后执行
          this.$nextTick( () => {
            // DOM 现在更新了
            this.updateAfter()
          })
        }, 5000)


      },
      updateAfter() {
        this.text = '更新完成'
      }
    },
    components: {},
    watch: {}
  }

</script>
