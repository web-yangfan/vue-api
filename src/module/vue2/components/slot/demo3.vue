<template>
  <div>
   <slot :msg="childMsg"></slot>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: [],
    data () {
      return {
        childMsg: '来自子组件的内容!!'
      }
    }
  }
</script>
