<template>
  <div class="container">
    <h3>观察数组变异方法</h3>
    <ul>
      <li>
        <code>下面方法会改变原始数组</code>
        <ol>
          <li><strong>push</strong> <code >向数组的末尾添加一个或更多元素，并返回新的长度</code></li>
          <li><strong>pop</strong> <code>除并返回数组的最后一个元素</code></li>
          <li><strong>shift</strong> <code>把数组的第一个元素从其中删除，并返回第一个元素的值</code></li>
          <li><strong>unshift</strong> <code>可向数组的开头添加一个或更多元素，并返回新的长度</code></li>
          <li><strong>splice</strong> <code>从数组中添加/删除项目，然后返回被删除的项目</code></li>
          <li><strong>sort</strong> <code>方法用于对数组的元素进行排序</code></li>
          <li><strong>reverse</strong> <code>法用于颠倒数组中元素的顺序</code></li>
        </ol>
      </li>
      <li>
        <code>下面方法不会改变原始数组</code>
        <ol>
          <li><strong>filter</strong></li>
          <li><strong>concat</strong></li>
          <li><strong>slice</strong></li>
        </ol>
      </li>
    </ul>
    <h5>例子：</h5>
    <div class="demo-box">
      <demo></demo>
    </div>
  </div>
</template>

<script>
  import demo from './demo1.vue'
  export default {
    props: [],
    data () {
      return {
      }
    },
    components: {
      demo
    }
  }
</script>
