<template>
  <div>
    <new-component></new-component>
  </div>
</template>

<script>
  import testComponent from './extends-component.vue'

  let newComponent = {
    extends: testComponent,
    computed: {
      count: function () {
        this.str = '通过extends方式继承组件，并且改写computed中的count方法'
        return this.str
      }
    },
    methods: {
      handlerClick () {
        this.clickStr = '通过extends方式继承组件 覆盖methods中的方法'
      }
    }
  }

  export default {
    components: {
      newComponent
    }
  }
</script>

<style scoped>

</style>
