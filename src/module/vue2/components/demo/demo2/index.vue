<template>
  <div class="container">
    <h5>tab标签页组件</h5>
    <br><br>
    <div class="demo-box">
      <tabs v-model="activeKey">
        <pane label="标签一" name="1">
          标签一的内容
        </pane>

        <pane label="标签二" name="2">
          标签二的内容
        </pane>

        <pane label="标签三" name="3">
          标签三的内容
        </pane>
      </tabs>
    </div>
  </div>
</template>

<script>
  import './demo2.styl'
  import tabs from './tabs.vue'
  import pane from './pane.vue'
  export default {
    data () {
      return {
        activeKey: '1'
      }
    },
    mounted () {
    },
    methods: {
    },
    components: {
      tabs,
      pane
    }
  }
</script>

