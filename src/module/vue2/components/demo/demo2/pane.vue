<template>
  <div>
    <div class="pane" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pane',
    props: {
      name: {
        type: String
      },
      label: {
        type: String,
        default: ''
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
</script>

