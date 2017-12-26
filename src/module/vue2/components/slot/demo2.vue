<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
`
<script>
  export default {
    props: [],
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {},
    components: {},
    watch: {}
  }
</script>
