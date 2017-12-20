<template>
  <div class="container">
    <h3>v-cloak</h3>
    <ul>
      <li><strong>说明:</strong> 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕</li>
      <li>HTML 绑定 Vue实例，在页面加载时会闪烁 就会出现 <code v-pre>{{msg}}</code> 这种效果</li>
    </ul>

    <pre>
      <code class="css">
[v-cloak] {
  display: none;
}
      </code>
    </pre>
    <pre v-pre>
    <code class="html">
&lt;div id=&quot;app&quot; v-cloak&gt;
    {{msg}}
&lt;/div&gt;
    </code>
  </pre>

  <ul>
    <li><strong class="warning">注意</strong> Vue1 中，允许将 Vue 实例挂载在 body 上，而 Vue2 是不允许的，想对整个页面实例化，需要另外用一个 div 来容纳整个页面内容，对其进行实例化 <code>这样在使用 v-cloak 时，同样需要用到这种方法</code></li>
    <li><strong class="warning">注意css引入问题</strong> 在实际项目中，我们常通过 @import|require 来加载 css 文件，而 @import 是在页面 DOM 完全载入后才会进行加载，如果我们将 <code>[v-cloak]</code> 写在 @import 加载的 css 文件中，就会导致页面仍旧闪烁。为了避免这种情况，我们可以将 <code>[v-cloak]</code> 写在 link 引入的 css 中，或者写一个内联 css 样式，这样就得到了解决。</li>
  </ul>
  </div>
</template>
