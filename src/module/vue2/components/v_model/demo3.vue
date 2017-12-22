<template>
  <div>
    <label style="margin-right: 10px">
      <input type="checkbox" v-model="toggle"  :true-value="value1" :false-value="value2"> 男
    </label>
    <p>{{toggle}}</p>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: [],
    data () {
      return {
        toggle: false,
        value1: '选中了',
        value2: '没有选中'
      }
    },
    methods: {
    }
  }
</script>
