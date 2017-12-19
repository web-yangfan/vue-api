<template>
  <div class="container">
    <h3>生命周期</h3>
    <ul>
      <li><strong>created:</strong><code>实例创建完成后调用，此阶段完成了数据的观察等，但尚未挂载，$el还不可用，需要初始化处理一些数据时会比较有用</code></li>
      <li><strong>mounted:</strong> <code>el挂载到实例上后调用，一般我们第一个业务逻辑会在这里开始</code></li>
      <li><strong>beforeDestroy:</strong><code>实例销毁之前调用，主要解绑一些使用addEventListener 监听的事件等</code></li>
    </ul>
    <img src="./lifecycle-1.png" alt="">
    <img src="./lifecycle-2.png" alt="">
  </div>
</template>


