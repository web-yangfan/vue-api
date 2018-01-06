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
      value: {
        type: [String, Number]
      }
    },
    data () {
      return {
        currentValue: this.value,
        navList: []
      }
    },
    mounted () {
    },
    methods: {
      tabCls (item) {
        return [
          'tabs-tab',
          {
            'tabs-tab-active': item.name === this.currentValue
          }
        ]
      },
      getTags () {
        return this.$children.filter((item) => {
          return item.$options.name === 'pane'
        })
      },
      updateNav () {
        this.navList = []
        this.getTags().forEach((pane, index) => {
          this.navList.push({
            label: pane.label,
            name: pane.name || index
          })
          if (!pane.name) pane.name === index
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
          return tab.show = tab.name === this.currentValue
        })
      },
      handleChange (index) {
        var nav = this.navList[index]
        var name = nav.name
        this.currentValue = name
        this.$emit('input', name)
        this.$emit('on-click', name)
      }
    },
    watch: {
      value: function (val) {
        this.currentValue = val
      },
      currentValue: function () {
        this.updateStatus()
      }
    }
  }
</script>

<style scoped>

</style>
