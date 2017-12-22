<template>
  <div>
    <label style="margin-right: 10px">
      <input type="radio" v-model="gender" value="男"> 男
    </label>

    <label>
      <input type="radio" v-model="gender" value="女"> 女
    </label>
    <p>{{gender}}</p>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: [],
    data () {
      return {
        gender: '女'
      }
    },
    methods: {
    }
  }
</script>
