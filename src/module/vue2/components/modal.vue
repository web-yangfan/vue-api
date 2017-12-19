<template lang="jade">
  .modal-box(v-if="isShow")
    button.close-btn(@click="hide") x
    .content-box
      component(:is="currentView")
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
  import _delete from './delete/index.vue'
  import directive from './directive/index.vue'
  import _filter from './filter/index.vue'
  import _component from './component/index.vue'
  import _use from './use/index.vue'
  import _mixin from './mixin/index.vue'
  import compile from './compile/index.vue'
  import version from './version/index.vue'
  // 选项/资源
  import directives from './directives/index.vue'
  import filters from './filters/index.vue'
  // 选项/DOM
  // 选项/生命周期钩子
  // 选项/资源
  // 选项/组合
  import _mixins from './mixins/index.vue'
  // 选项/其他
  // 实例属性
  // 实例方法/数据
  // 实例方法/事件

  // 实例方法/生命周期
  import $next_tick from './$next_tick/index.vue'
  // 指令
  import v_pre from './v_pre/index.vue'
  import v_if from './v_if/index.vue'
  import v_show from './v_show/index.vue'
  import _key from './key/index.vue'
  // 特殊属性
  // 内置组件
  export default {
    props: ['currentView', 'isShow'],
    data () {
      return {}
    },
    mounted() {
    },
    methods: {
      hide() {
        this.$emit('hide')
      }
    },
    components: {
      lifecycle,
      silent,
      extend,
      next_tick,
      set,
      _delete,
      directive,
      _filter,
      _component,
      _use,
      _mixin,
      compile,
      version,
      directives,
      filters,
      _mixins,
      $next_tick,
      v_pre,
      v_if,
      v_show,
      _key

    },
    watch: {}
  }

</script>
