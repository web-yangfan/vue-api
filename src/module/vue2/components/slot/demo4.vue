<template>
  <div>
    <ul>
      <slot name="fanfan" v-for="fanfan in books" :book-cname="fanfan.cname">
        <!-- 这里也可以默认 slot 内容 -->
      </slot>
    </ul>
   </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: ['books'],
    data () {
      return {
      }
    }
  }
</script>
