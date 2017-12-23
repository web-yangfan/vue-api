<template>
  <div>
    <p>子组件：{{warningText}}</p>
  </div>
</template>

<script>
  export default {
    name: 'my-component',
    props: ['warningText']
  }
</script>
