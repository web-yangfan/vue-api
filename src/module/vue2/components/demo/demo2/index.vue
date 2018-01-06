<template>
  <div class="container">
    <h5>tab标签页组件</h5>
    <ul>
      <li>
         本例子设计技术难点
         <ol>
           <li>1、使用组件嵌套方式</li>
           <li>2、将一系列pane组件作为slot</li>
           <li>3、使用了$parent和$children的方式访问了父链和子链: 定义了prop: value 和data: currentValue, 使用this.$emit('on-click', name)实现双向绑定</li>
         </ol>
      </li>
    </ul>
    <br><br>
    <div class="demo-box">
      <tabs v-model="activeKey">
        <pane label="标签一" name="1">
          标签一的内容
        </pane>

        <pane label="标签二" name="2">
          标签二的内容
        </pane>

        <pane label="标签三" name="3">
          标签三的内容
        </pane>
      </tabs>
    </div>
    <h5>父组件</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!--父组件--&gt;
   &lt;div&gt;
      &lt;tabs v-model=&quot;activeKey&quot;&gt;
        &lt;pane label=&quot;标签一&quot; name=&quot;1&quot;&gt;
          标签一的内容
        &lt;/pane&gt;

        &lt;pane label=&quot;标签二&quot; name=&quot;2&quot;&gt;
          标签二的内容
        &lt;/pane&gt;

        &lt;pane label=&quot;标签三&quot; name=&quot;3&quot;&gt;
          标签三的内容
        &lt;/pane&gt;
      &lt;/tabs&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import &#x27;./demo2.styl&#x27;
  import tabs from &#x27;./tabs.vue&#x27;
  import pane from &#x27;./pane.vue&#x27;
  export default {
    data () {
      return {
        activeKey: &#x27;1&#x27;
      }
    },
    components: {
      tabs,
      pane
    }
  }
&lt;/script&gt;
      </code>
    </pre>

    <h5>tabs.vue文件</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!-- tabs.vue文件  --&gt;
  &lt;div class=&quot;tabs&quot;&gt;
    &lt;div class=&quot;tabs-bar&quot;&gt;
      &lt;div v-for=&quot;(item, index) in navList&quot; :class=&quot;tabCls(item)&quot; @click=&quot;handleChange(index)&quot;&gt;
        {{item.label}}
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;tabs-content&quot;&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;

  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    props: {
      /*
      * &lt;tabs v-model=&quot;activeKey&quot;&gt; 直接用v-model绑定的一个数据activeKey，这里也可以称做语法糖
      * value 就是父组件 activeKeyå
      * */
      value: {
        type: [String, Number]
      }
    },
    data () {
      return {
        // 因为不能修改value,所以复制一份自己维护
        currentValue: this.value,
        navList: []
      }
    },
    mounted () {
    },
    methods: {
      getTags () {
        // 通过遍历子组件，得到所有的pane组件
        return this.$children.filter((item) =&gt; {
          return item.$options.name === &#x27;pane&#x27;
        })
      },
      // 在生命周期mounted 也就是pane组件初始化时，调用updateNav方法，更新navList数据
      updateNav () {
        this.navList = []
        this.getTags().forEach((pane, index) =&gt; {
          this.navList.push({
            // 获取组件的label属性
            label: pane.label,
            // 获取组件的name属性，如果name属性不存在，就获取索引
            name: pane.name || index
          })
          // 设置当前选中的tab索引，TODO 补充
          if (index === 0) {
            if (!this.currentValue) {
              this.currentValue === pane.name || index
            }
          }
        })
        this.updateStatus()
      },
      updateStatus () {
        var tabs = this.getTags()
        tabs.forEach((tab) =&gt; {
          // 显示当前选中的tab对应的组件，隐藏没有选中的
          // 这里的show其实就是子组件的show
          tab.show = tab.name === this.currentValue
        })
      },
      tabCls (item) {
        return [
          &#x27;tabs-tab&#x27;,
          {
            // 给当前选择中的tab加一个class
            &#x27;tabs-tab-active&#x27;: item.name === this.currentValue
          }
        ]
      },
      // 点击tab标题时触发
      handleChange (index) {
        var nav = this.navList[index]
        var name = nav.name
        // 改变当前选中的tab, 并触发下面的watch
        this.currentValue = name
        // 更新value
        this.$emit(&#x27;input&#x27;, name)
        // 触发一个自定事件，供父组件使用
        this.$emit(&#x27;on-click&#x27;, name)
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      },
      currentValue () {
        // 在当前选中的tab组件发生变化时，更新pane的显示状态
        this.updateStatus()
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>

    <h5>pane.vue文件</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!-- pane.vue文件 --&gt;
  &lt;div&gt;
    &lt;div class=&quot;pane&quot; v-show=&quot;show&quot;&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &#x27;pane&#x27;,
    props: {
      name: {
        type: String
      },
      label: {
        type: String,
        default: &#x27;&#x27;
      }
    },
    data () {
      return {
        show: true
      }
    },
    mounted () {
      this.updateNav()
    },
    methods: {
      updateNav () {
        // 调用父组件方法
        this.$parent.updateNav()
      }
    }
  }
&lt;/script&gt;
      </code>
    </pre>
  </div>
</template>

<script>
  import './demo2.styl'
  import tabs from './tabs.vue'
  import pane from './pane.vue'
  export default {
    data () {
      return {
        activeKey: '1'
      }
    },
    mounted () {
    },
    methods: {
    },
    components: {
      tabs,
      pane
    }
  }
</script>

