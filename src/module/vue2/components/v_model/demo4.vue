<template>
  <div>
    <label>
      <input type="text" v-model.lazy="lazyMessage" placeholder="lazy">
      <p>{{lazyMessage}}</p>
    </label>
    <br>
    <label>
      <input type="number" v-model.number="numberMessage" placeholder="number">
      <p>{{typeof numberMessage}}</p>
    </label>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'demo4',
    props: [],
    data () {
      return {
        lazyMessage: '',
        numberMessage: '',
        trimMessage: ''
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
