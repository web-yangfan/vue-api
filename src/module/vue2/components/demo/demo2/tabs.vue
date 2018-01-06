<template>
  <div class="tabs">
    <div class="tabs-bar">
      <div v-for="(item, index) in navList" :class="tabCls(item)" @click="handleChange(index)">
        {{item.label}}
      </div>
    </div>

    <div class="tabs-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      /*
      * <tabs v-model="activeKey"> 直接用v-model绑定的一个数据activeKey，这里也可以称做语法糖
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
        return this.$children.filter((item) => {
          return item.$options.name === 'pane'
        })
      },
      // 在生命周期mounted 也就是pane组件初始化时，调用updateNav方法，更新navList数据
      updateNav () {
        this.navList = []
        this.getTags().forEach((pane, index) => {
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
        tabs.forEach((tab) => {
          // 显示当前选中的tab对应的组件，隐藏没有选中的
          // 这里的show其实就是子组件的show
          tab.show = tab.name === this.currentValue
        })
      },
      tabCls (item) {
        return [
          'tabs-tab',
          {
            // 给当前选择中的tab加一个class
            'tabs-tab-active': item.name === this.currentValue
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
        this.$emit('input', name)
        // 触发一个自定事件，供父组件使用
        this.$emit('on-click', name)
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
</script>
