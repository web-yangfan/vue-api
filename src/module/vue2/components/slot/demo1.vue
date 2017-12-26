<template>
  <div>
    <slot>
      <p>{{text1}}</p>
    </slot>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: [],
    data () {
      return {
        text1: '如果父组件没有插入内容，我将作为默认出现'
      }
    },
    mounted () {
    },
    methods: {},
    components: {},
    watch: {}
  }
</script>
