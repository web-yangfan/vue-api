<template>
  <div>
    <div v-time="timeNow"></div>
    <div v-time="timeBefore"></div>
  </div>
</template>

<script>
  import time from './time.js'
  export default {
    directives: {
    // 实时时间转换指令
      time: time
    },
    data () {
      return {
        timeNow: (new Date()).getTime(),
        // 2018/1/8
        timeBefore: 1488930695721
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

