<template lang="jade">
  .container
    modal(:current-view="currentView",:is-show="isShow", v-on:hide="hide")
    ul.menu-root
      li
        a(href="javascript:;")
          small Global
          | 全局配置
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('lifecycle')") 生命周期
          li
            a(href="javascript:;", @click="show('silent')") silent
          li
            a(href="javascript:;", @click="show('optionMergeStrategies')") optionMergeStrategies
          li
            a(href="javascript:;",) devtools
          li
            a(href="javascript:;") errorHandler
          li
            a(href="javascript:;") warnHandler
          li
            a(href="javascript:;") ignoredElements
          li
            a(href="javascript:;") keyCodes
          li
            a(href="javascript:;") performance
          li
            a(href="javascript:;") productionTip
      li
        a(href="javascript:;")
          small Global
          | 全局API
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('extend')") Vue.extend
          li
            a(href="javascript:;", @click="show('next_tick')") Vue.nextTick
          li
            a(href="javascript:;", @click="show('set')") Vue.set
          li
            a(href="javascript:;", @click="show('v_delete')") Vue.delete
          li
            a(href="javascript:;", @click="show('directive')") Vue.directive
          li
            a(href="javascript:;", @click="show('v_filter')") Vue.filter
          li
            a(href="javascript:;", @click="show('v_component')") Vue.component
          li
            a(href="javascript:;", @click="show('v_use')") Vue.use
          li
            a(href="javascript:;", @click="show('v_mixin')") Vue.mixin
          li
            a(href="javascript:;", @click="show('compile')") Vue.compile
          li
            a(href="javascript:;", @click="show('version')") Vue.version
      li
        a(href="javascript:;") 选项/数据
        ul.menu-sub
          li
            a(href="javascript:;") data
          li
            a(href="javascript:;", @click="show('v_props')") props
          li
            a(href="javascript:;") propsData
          li
            a(href="javascript:;") computed
          li
            a(href="javascript:;") methods
          li
            a(href="javascript:;") watch
      li
        a(href="javascript:;") 选项/DOM
        ul.menu-sub
          li
            a(href="javascript:;") el
          li
            a(href="javascript:;") template
          li
            a(href="javascript:;") render
          li
            a(href="javascript:;") renderError

      li
        a(href="javascript:;") 选项/生命周期钩子
        ul.menu-sub
          li
            a(href="javascript:;") beforeCreate
          li
            a(href="javascript:;") created
          li
            a(href="javascript:;") beforeMount
          li
            a(href="javascript:;") mounted
          li
            a(href="javascript:;") beforeUpdate
          li
            a(href="javascript:;") updated
          li
            a(href="javascript:;") activated
          li
            a(href="javascript:;") deactivated
          li
            a(href="javascript:;") beforeDestroy
          li
            a(href="javascript:;") destroyed

      li
        a(href="javascript:;") 选项/资源
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('directives')") directives
          li
            a(href="javascript:;", @click="show('filters')") filters
          li
            a(href="javascript:;") components

      li
        a(href="javascript:;") 选项/组合
        ul.menu-sub
          li
            a(href="javascript:;") parent
          li
            a(href="javascript:;", @click="show('v_mixins')") mixins
          li
            a(href="javascript:;") extends
          li
            a(href="javascript:;") provide / inject

      li
        a(href="javascript:;") 选项/其他
        ul.menu-sub
          li
            a(href="javascript:;") name
          li
            a(href="javascript:;") delimiters
          li
            a(href="javascript:;") functional
          li
            a(href="javascript:;") inheritAttrs
          li
            a(href="javascript:;") comments
      li
        a(href="javascript:;") 实例属性
        ul.menu-sub
          li
            a(href="javascript:;") name
          li
            a(href="javascript:;") comments
          li
            a(href="javascript:;") vm.$data
          li
            a(href="javascript:;") vm.$props
          li
            a(href="javascript:;") vm.$el
          li
            a(href="javascript:;") vm.$options
          li
            a(href="javascript:;", @click="show('v_parent')") vm.$parent
          li
            a(href="javascript:;") vm.$root
          li
            a(href="javascript:;", @click="show('v_children')") vm.$children
          li
            a(href="javascript:;") vm.$slots
          li
            a(href="javascript:;") vm.$scopedSlots
          li
            a(href="javascript:;", @click="show('v_refs')") vm.$refs
          li
            a(href="javascript:;") vm.$isServer
          li
            a(href="javascript:;") vm.$attrs
          li
            a(href="javascript:;") vm.$listeners


      li
        a(href="javascript:;") 实例方法/数据
          ul.menu-sub
            li
              a(href="javascript:;") vm.$watch
            li
              a(href="javascript:;") vm.$set
            li
              a(href="javascript:;") vm.$delete
      li
        a(href="javascript:;") 实例方法/事件
        ul.menu-sub
          li
            a(href="javascript:;") vm.$on
          li
            a(href="javascript:;") vm.$once
          li
            a(href="javascript:;") vm.$off
          li
            a(href="javascript:;", @click="show('v_emit')") vm.$emit

      li
        a(href="javascript:;") 实例方法/生命周期
        ul.menu-sub
          li
            a(href="javascript:;") vm.$mount
          li
            a(href="javascript:;") vm.$forceUpdate
          li
            a(href="javascript:;", @click="show('v_next_tick')") vm.$nextTick
          li
            a(href="javascript:;") vm.$destroy

      li
        a(href="javascript:;")
          small html
          | 指令
          ul.menu-sub
            li
              a(href="javascript:;") v-text
            li
              a(href="javascript:;") v-html
            li
              a(href="javascript:;", @click="show('v_show')") v-show
            li
              a(href="javascript:;", @click="show('v_if')") v-if、v-else-if、v-else
            li
              a(href="javascript:;", @click="show('v_key')") key属性
            li
              a(href="javascript:;", @click="show('v_for')") v-for
            li
              a(href="javascript:;") v-on
            li
              a(href="javascript:;") v-bind
            li
              a(href="javascript:;", @click="show('v_pre')") v-pre
            li
              a(href="javascript:;", @click="show('v_cloak')") v-cloak
            li
              a(href="javascript:;") v-once

      li
        a(href="javascript:;") 内置的组件
        ul.menu-sub
          li
            a(href="javascript:;") component
          li
            a(href="javascript:;") transition
          li
            a(href="javascript:;") transition-group
          li
            a(href="javascript:;") keep-alive
          li
            a(href="javascript:;") slot
      li
        a(href="javascript:;")
          small Array
          | 观察数组变异方法
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('array')") push
          li
            a(href="javascript:;", @click="show('array')") pop
          li
            a(href="javascript:;", @click="show('array')") shift
          li
            a(href="javascript:;", @click="show('array')") unshift
          li
            a(href="javascript:;", @click="show('array')") splice
          li
            a(href="javascript:;", @click="show('array')") splice
          li
            a(href="javascript:;", @click="show('array')") sort
          li
            a(href="javascript:;", @click="show('array')") reverse
          li
            a(href="javascript:;", @click="show('array')") filter
          li
            a(href="javascript:;", @click="show('array')") concat
          li
            a(href="javascript:;", @click="show('array')") slice
      li
        a(href="javascript:;")
          small modifiers
          | 修饰符
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('modifiers')") stop
          li
            a(href="javascript:;", @click="show('modifiers')") prevent
          li
            a(href="javascript:;", @click="show('modifiers')") capture
          li
            a(href="javascript:;", @click="show('modifiers')") self
          li
            a(href="javascript:;", @click="show('modifiers')") once
          li
            a(href="javascript:;", @click="show('modifiers')") 按键修饰符
      li.modifiers
        a(href="javascript:;")
          small modifiers
          | v-model
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('v_model')")
              small v-model
              | .lazy
          li
            a(href="javascript:;", @click="show('v_model')")
              small v-model
              | .number
          li
            a(href="javascript:;", @click="show('v_model')")
              small v-model
              | .trim
          li
            a(href="javascript:;", @click="show('v_model')") 表单绑定v-model例子
      li.modifiers
        a(href="javascript:;")
          small
          | 组件通信
        ul.menu-sub
          li
            a(href="javascript:;", @click="show('v_props')") props
          li
            a(href="javascript:;", @click="show('v_emit')") v-on和$emit
          li
            a(href="javascript:;", @click="show('v_model')") v-model和$emit
          li
            a(href="javascript:;", @click="show('v_parent')") vm.$parent
          li
            a(href="javascript:;", @click="show('v_children')") vm.$children
</template>

<script>
require('../../lib/highlight.pack')
require('../../lib/monokai-sublime.css')
import '../../css/basic.styl'
import '../../css/main.styl'

import modal from './components/modal.vue'

export default {
  name: 'app',
  data () {
    return {
      isShow: false,
      currentView: ''
    }
  },
  components: {
    modal
  },
  mounted () {
    this.highlight()
  },
  methods: {
    show (name) {
      this.currentView = name
      this.isShow = true
      this.highlight()
    },
    hide () {
      this.isShow = false
    },
    highlight () {
      hljs.initHighlightingOnLoad()
      $(function () {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block)
        })
      })
    }
  }
}
</script>

<style>

</style>
