<template>
<div class="container">
  <modal :current-view="currentView" :is-show="isShow" v-on:hide="hide"></modal>

  <ul class="menu-root">
    <li>
      <a href="javascript:;"><small>Global</small>全局配置</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('lifecycle')">生命周期</a></li>
        <li><a href="javascript:;" @click="show('silent')">silent</a></li>
        <li><a href="javascript:;" @click="show('optionMergeStrategies')">optionMergeStrategies</a></li>
        <li><a href="javascript:;">devtools</a></li>
        <li><a href="javascript:;">errorHandler</a></li>
        <li><a href="javascript:;">warnHandler</a></li>
        <li><a href="javascript:;">ignoredElements</a></li>
        <li><a href="javascript:;">keyCodes</a></li>
        <li><a href="javascript:;">performance</a></li>
        <li><a href="javascript:;">productionTip</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;"><small>Global</small>全局API</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('extend')">Vue.extend</a></li>
        <li><a href="javascript:;" @click="show('next_tick')">Vue.nextTick</a></li>
        <li><a href="javascript:;" @click="show('set')">Vue.set</a></li>
        <li><a href="javascript:;" @click="show('v_delete')">Vue.delete</a></li>
        <li><a href="javascript:;" @click="show('directive')">Vue.directive</a></li>
        <li><a href="javascript:;" @click="show('v_filter')">Vue.filter</a></li>
        <li><a href="javascript:;" @click="show('v_component')">Vue.component</a></li>
        <li><a href="javascript:;" @click="show('v_use')">Vue.use</a></li>
        <li><a href="javascript:;" @click="show('v_mixin')">Vue.mixin</a></li>
        <li><a href="javascript:;" @click="show('compile')">Vue.compile</a></li>
        <li><a href="javascript:;" @click="show('version')">Vue.version</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/数据</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">data</a></li>
        <li><a href="javascript:;" @click="show('v_props')">props</a></li>
        <li><a href="javascript:;">propsData</a></li>
        <li><a href="javascript:;">computed</a></li>
        <li><a href="javascript:;">methods</a></li>
        <li><a href="javascript:;" @click="show('v_watch')">watch</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/DOM</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">el</a></li>
        <li><a href="javascript:;">template</a></li>
        <li><a href="javascript:;" @click="show('v_render')">render</a></li>
        <li><a href="javascript:;">renderError</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/生命周期钩子</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">beforeCreate</a></li>
        <li><a href="javascript:;">created</a></li>
        <li><a href="javascript:;">beforeMount</a></li>
        <li><a href="javascript:;">mounted</a></li>
        <li><a href="javascript:;">beforeUpdate</a></li>
        <li><a href="javascript:;">updated</a></li>
        <li><a href="javascript:;">activated</a></li>
        <li><a href="javascript:;">deactivated</a></li>
        <li><a href="javascript:;">beforeDestroy</a></li>
        <li><a href="javascript:;">destroyed</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/资源</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('directives')">directives</a></li>
        <li><a href="javascript:;" @click="show('filters')">filters</a></li>
        <li><a href="javascript:;" @click="show('v_component')">components</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/组合</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">parent</a></li>
        <li><a href="javascript:;" @click="show('v_mixins')">mixins</a></li>
        <li><a href="javascript:;" @click="show('v_extends')">extends</a></li>
        <li><a href="javascript:;">provide / inject</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">选项/其他</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">name</a></li>
        <li><a href="javascript:;">delimiters</a></li>
        <li><a href="javascript:;">functional</a></li>
        <li><a href="javascript:;">inheritAttrs</a></li>
        <li><a href="javascript:;">comments</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">实例属性</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">name</a></li>
        <li><a href="javascript:;">comments</a></li>
        <li><a href="javascript:;">vm.$data</a></li>
        <li><a href="javascript:;">vm.$props</a></li>
        <li><a href="javascript:;">vm.$el</a></li>
        <li><a href="javascript:;">vm.$options</a></li>
        <li><a href="javascript:;" @click="show('v_parent')">vm.$parent</a></li>
        <li><a href="javascript:;">vm.$root</a></li>
        <li><a href="javascript:;" @click="show('v_children')">vm.$children</a></li>
        <li><a href="javascript:;" @click="show('v__slot')">vm.$slots</a></li>
        <li><a href="javascript:;">vm.$scopedSlots</a></li>
        <li><a href="javascript:;" @click="show('v_refs')">vm.$refs</a></li>
        <li><a href="javascript:;">vm.$isServer</a></li>
        <li><a href="javascript:;">vm.$attrs</a></li>
        <li><a href="javascript:;">vm.$listeners</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">实例方法/数据
        <ul class="menu-sub">
          <li><a href="javascript:;" @click="show('v_watch')">vm.$watch</a></li>
          <li><a href="javascript:;">vm.$set</a></li>
          <li><a href="javascript:;">vm.$delete</a></li>
        </ul>
      </a>
    </li>

    <li>
      <a href="javascript:;">实例方法/事件</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">vm.$on</a></li>
        <li><a href="javascript:;">vm.$once</a></li>
        <li><a href="javascript:;">vm.$off</a></li>
        <li><a href="javascript:;" @click="show('v_emit')">vm.$emit</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;">实例方法/生命周期</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('v_mount')">vm.$mount</a></li>
        <li><a href="javascript:;">vm.$forceUpdate</a></li>
        <li><a href="javascript:;" @click="show('v_next_tick')">vm.$nextTick</a></li>
        <li><a href="javascript:;">vm.$destroy</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;"><small>html</small>指令
        <ul class="menu-sub">
          <li><a href="javascript:;">v-text</a></li>
          <li><a href="javascript:;">v-html</a></li>
          <li><a href="javascript:;" @click="show('v_show')">v-show</a></li>
          <li><a href="javascript:;" @click="show('v_if')">v-if、v-else-if、v-else</a></li>
          <li><a href="javascript:;" @click="show('v_key')">key属性</a></li>
          <li><a href="javascript:;" @click="show('v_for')">v-for</a></li>
          <li><a href="javascript:;">v-on</a></li>
          <li><a href="javascript:;">v-bind</a></li>
          <li><a href="javascript:;" @click="show('v_pre')">v-pre</a></li>
          <li><a href="javascript:;" @click="show('v_cloak')">v-cloak</a></li>
          <li><a href="javascript:;">v-once</a></li>
        </ul>
      </a>
    </li>

    <li>
      <a href="javascript:;">内置的组件</a>
      <ul class="menu-sub">
        <li><a href="javascript:;">component</a></li>
        <li><a href="javascript:;">transition</a></li>
        <li><a href="javascript:;">transition-group</a></li>
        <li><a href="javascript:;">keep-alive</a></li>
        <li><a href="javascript:;" @click="show('v_slot')">slot</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;"><small>Array</small>观察数组变异方法</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('array')">push</a></li>
        <li><a href="javascript:;" @click="show('array')">pop</a></li>
        <li><a href="javascript:;" @click="show('array')">shift</a></li>
        <li><a href="javascript:;" @click="show('array')">unshift</a></li>
        <li><a href="javascript:;" @click="show('array')">splice</a></li>
        <li><a href="javascript:;" @click="show('array')">splice</a></li>
        <li><a href="javascript:;" @click="show('array')">sort</a></li>
        <li><a href="javascript:;" @click="show('array')">reverse</a></li>
        <li><a href="javascript:;" @click="show('array')">filter</a></li>
        <li><a href="javascript:;" @click="show('array')">concat</a></li>
        <li><a href="javascript:;" @click="show('array')">slice</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;"><small>modifiers</small>修饰符</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('modifiers')">stop</a></li>
        <li><a href="javascript:;" @click="show('modifiers')">prevent</a></li>
        <li><a href="javascript:;" @click="show('modifiers')">capture</a></li>
        <li><a href="javascript:;" @click="show('modifiers')">self</a></li>
        <li><a href="javascript:;" @click="show('modifiers')">once</a></li>
        <li><a href="javascript:;" @click="show('modifiers')">按键修饰符</a></li>
      </ul>
    </li>

    <li class="modifiers"><a href="javascript:;"><small>modifiers</small>v-model</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('v_model')"><small>v-model</small>.lazy</a></li>
        <li><a href="javascript:;" @click="show('v_model')"><small>v-model</small>.number</a></li>
        <li><a href="javascript:;" @click="show('v_model')"><small>v-model</small>.trim</a></li>
        <li><a href="javascript:;" @click="show('v_model')">表单绑定v-model例子</a></li>
      </ul>
    </li>

    <li class="modifiers"><a href="javascript:;"><small></small>组件通信</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('v_props')">props</a></li>
        <li><a href="javascript:;" @click="show('v_emit')">v-on和$emit</a></li>
        <li><a href="javascript:;" @click="show('v_model')">v-model和$emit</a></li>
        <li><a href="javascript:;" @click="show('v_parent')">vm.$parent</a></li>
        <li><a href="javascript:;" @click="show('v_children')">vm.$children</a></li>
        <li><a href="javascript:;" @click="show('v_refs')">vm.$refs</a></li>
      </ul>
    </li>

    <li>
      <a href="javascript:;"><small></small>demo</a>
      <ul class="menu-sub">
        <li><a href="javascript:;" @click="show('demo1')"> 数字输入框</a></li>
        <li><a href="javascript:;" @click="show('demo2')"> tab标签页组件</a></li>
      </ul>
    </li>

  </ul>
</div>

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
