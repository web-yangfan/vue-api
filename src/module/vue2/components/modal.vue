<template>
  <div v-if="isShow" class="modal-box">
    <button @click="hide" class="close-btn">x</button>
      <div class="content-box">
      <component :is="currentView"></component>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
  // 全局配置
  import lifecycle from './lifecycle/index.vue'
  import silent from './silent/silent'
  // 全局API
  import extend from './extend/index.vue'
  import next_tick from './next_tick/index.vue'
  import set from './set/index.vue'
  import v_delete from './delete/index.vue'
  import directive from './directive/index.vue'
  import v_filter from './filter/index.vue'
  import v_component from './component/index.vue'
  import v_use from './use/index.vue'
  import v_mixin from './mixin/index.vue'
  import compile from './compile/index.vue'
  import version from './version/index.vue'
  // 选项/资源
  import directives from './directives/index.vue'
  import filters from './filters/index.vue'
  // 选项/数据
  import v_props from './v_props/index.vue'
  import v_watch from './watch/index.vue'
  // 选项/DOM
  import v_render from './render/index.vue'
  // 选项/生命周期钩子
  // 选项/资源
  // 选项/组合
  import v_mixins from './mixins/index.vue'
  import v_extends from './extends/index.vue'
  // 选项/其他
  // 实例属性
  import v_parent from './parent/index.vue'
  import v_children from './children/index.vue'
  import v_refs from './refs/index.vue'
  import v__slot from './$slot/index.vue'
  // 实例方法/数据
  // 实例方法/事件
  import v_emit from './emit/index.vue'

  // 实例方法/生命周期
  import v_next_tick from './$next_tick/index.vue'
  import v_mount from './mount/index.vue'
  // 指令
  import v_pre from './v_pre/index.vue'
  import v_if from './v_if/index.vue'
  import v_show from './v_show/index.vue'
  import v_key from './key/index.vue'
  import v_for from './v_for/index.vue'
  import v_cloak from './v_cloak/index.vue'
  // 变异数组方法
  import array from './array/index.vue'
  // 特殊属性
  // 修饰符
  import modifiers from './modifiers/index.vue'
  // 内置组件
  import v_model from './v_model/index.vue'
  import v_slot from './slot/index.vue'
  // 其他
  import demo1 from './demo/demo1/index.vue'
  import demo2 from './demo/demo2/index.vue'

  export default {
    props: ['currentView', 'isShow'],
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      hide () {
        this.$emit('hide')
      }
    },
    components: {
      lifecycle,
      silent,
      extend,
      next_tick,
      set,
      v_delete,
      directive,
      v_filter,
      v_component,
      v_use,
      v_mixin,
      compile,
      version,
      directives,
      filters,
      v_mixins,
      v_next_tick,
      v_pre,
      v_if,
      v_show,
      v_key,
      v_for,
      array,
      modifiers,
      v_cloak,
      v_model,
      v_props,
      v_emit,
      v_parent,
      v_children,
      v_refs,
      v_slot,
      v__slot,
      v_mount,
      demo1,
      demo2,
      v_watch,
      v_extends,
      v_render
    },
    watch: {}
  }
</script>
