<template>
  <section>
    <button @click="onCounter">{{counter}}</button>
  </section>
</template>
<style scoped>
  section {
    display: inline-block;
  }
</style>
<script>
  export default {
    props: ['counter'],
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      onCounter() {
        this.$emit('onCounter')
      }
    },
    components: {},
    watch: {}
  }
</script>
