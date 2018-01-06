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
        this.$parent.updateNav()
      }
    },
    watch: {
      label () {
        this.updateNav()
      }
    }
  }
</script>

<style scoped>

</style>
