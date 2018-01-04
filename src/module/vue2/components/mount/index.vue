<template>
  <div class="container">
    <h3>vvm.$mount( [elementOrSelector] )</h3>
    <ul>
      <li><strong>参数:</strong>
        <ol>
          <li><code>{Element | string} [elementOrSelector]</code></li>
          <li><code>{boolean} [hydrating]</code></li>
        </ol>

      </li>
      <li><strong>用法:</strong> <span>如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 <code>vm.$mount()</code> 手动地挂载一个未挂载的实例。</span></li>
      <li>如果没有提供 <code>elementOrSelector</code> 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。</li>
    </ul>

    <pre v-pre>
      <code>
var MyComponent = Vue.extend({
  template: '&lt;div&gt;Hello!&lt;/div&gt;'
})

// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app')

// 同上
new MyComponent({ el: '#app' })

// 或者，在文档之外渲染并且随后挂载
var component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)

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
