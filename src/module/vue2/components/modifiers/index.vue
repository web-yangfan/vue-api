<template>
  <div class="container">
    <h3>修饰符</h3>
    <ul>
      <li>
        <code>事件修饰符</code>
        <ol>
          <li><strong>stop</strong></li>
          <li><strong>prevent</strong></li>
          <li><strong>capture</strong></li>
          <li><strong>self</strong></li>
          <li><strong>once</strong></li>
        </ol>
      </li>
    </ul>
    <pre>
      <code class="html">
&lt;!-- 阻止单击事件冒泡 --&gt;
&lt;a @click.stop=&quot;handle&quot;&gt;&lt;/a&gt;

    &lt;!-- 提交事件不再重载页面 --&gt;
&lt;form @submit.prevent=&quot;handle&quot;&gt;&lt;/form&gt;

    &lt;!-- 修饰符可以串联 --&gt;
&lt;a @click.stop.prevent=&quot;handle&quot;&gt;&lt;/a&gt;

    &lt;!-- 只有修饰符 --&gt;
&lt;form @submit.prevent&gt;&lt;/form&gt;

    &lt;!-- 添加事件监听器时使用事件捕获模式 --&gt;
&lt;div @click.capture=&quot;handle&quot;&gt;&lt;/div&gt;

    &lt;!-- 只当事件在该元素本身(而不是子元素)触发时触发回调 --&gt;
&lt;div @click.self=&quot;handle&quot;&gt;&lt;/div&gt;

    &lt;!-- 只触发一次,组件同样适用 --&gt;
&lt;div @click.once=&quot;handle&quot;&gt;&lt;/div&gt;
      </code>
    </pre>

    <ul>
      <li>
        <code>按键修饰符</code>
        <ol>
          <li><strong>13 | enter</strong></li>
          <li><strong>tab</strong></li>
          <li><strong>delete(捕获 "删除" 和 "退格")<</strong></li>
          <li><strong>esc</strong></li>
          <li><strong>space</strong></li>
          <li><strong>up</strong></li>
          <li><strong>down</strong></li>
          <li><strong>left</strong></li>
          <li><strong>right</strong></li>
        </ol>
      </li>
    </ul>
<pre>
  <code class="html">
&lt;!-- 只有在keyCode是13或者按 &#x27;enter&#x27; 调用 handle方法 --&gt;
&lt;input type=&quot;text&quot; @keyup.13=&quot;handle&quot;&gt;
&lt;input type=&quot;text&quot; @keyup.enter=&quot;handle&quot;&gt;
&lt;!-- 也可以自己配置 --&gt;
Vue.config.keyCode.f1 = 112
&lt;!-- 全局定义后 就可以使用f1了 --&gt;
&lt;input type=&quot;text&quot; @keyup.f1=&quot;handle&quot;&gt;
  </code>
</pre>


    <ul>
      <li>
        <code>下面修饰符可以组合使用，或者和鼠标一起配合使用</code>
        <ol>
          <li><strong>ctrl</strong></li>
          <li><strong>alt</strong></li>
          <li><strong>shift</strong></li>
          <li><strong>meta(mac下是command键，windows下是窗口键)</strong></li>
        </ol>
      </li>
    </ul>
    <pre>
      <code class="html">
&lt;!-- shift + s--&gt;
&lt;input type=&quot;text&quot; @keyup.shift.83=&quot;handle&quot;&gt;
&lt;!-- ctrl + click --&gt;
&lt;div @click.ctrl=&quot;handle&quot;&gt;&lt;/div&gt;
      </code>
    </pre>
  </div>
</template>

<script>
  export default {
    props: [],
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>
