<template>
  <div class="container">
    <h3>v-if、v-else-if、v-else</h3>
    <ul>
      <li v-pre>说明:<code>根据条件渲染/销毁 元素/组件</code></li>
    </ul>
    <h5>示例：</h5>
    <pre v-pre>
      <code class="html">
&lt;p v-if=&quot;status === 1&quot;&gt; 当status为1时显示该行&lt;/p&gt;
&lt;p v-else-if=&quot;status === 2&quot;&gt; 当status为2时显示该行&lt;/p&gt;
&lt;p v-else&gt; 否则显示改行&lt;/p&gt;
      </code>
    </pre>

    <h5>示例：判断多个元素</h5>
    <pre v-pre>
      <code class="html">
&lt;div&gt;
  &lt;template v-if=&quot;status === 1&quot;&gt;
    &lt;p&gt;这是一段文本&lt;/p&gt;
    &lt;p&gt;这是一段文本&lt;/p&gt;
    &lt;p&gt;这是一段文本&lt;/p&gt;
  &lt;/template&gt;
  &lt;template v-else&gt;
    &lt;p&gt;这是文字&lt;/p&gt;
    &lt;p&gt;这是文字&lt;/p&gt;
    &lt;p&gt;这是文字&lt;/p&gt;
  &lt;/template&gt;
&lt;/div&gt;
      </code>
    </pre>

  </div>

</template>
