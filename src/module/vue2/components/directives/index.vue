<template>
  <div class="container">
    <h3>directives</h3>
    <ul>
      <li>
        <strong>参数:</strong>
        <ol>
          <li><code>Object</code></li>
        </ol>
      </li>
      <li><strong class="warning">注意:</strong>
        1、directive全局注册和directives局部注册。 2、directive全局注册钩子函数 只有 bind 和 inserted有反应
      </li>
      <li>
        <strong>钩子函数:</strong>
        <ol>
          <li><code>bind</code>只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。</li>
          <li><code>inserted</code>被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。</li>
          <li><code>update</code>所在组件的 VNode 更新时调用，<strong>但是可能发生在其孩子的 VNode 更新之前。</strong>指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。</li>
          <li><code>componentUpdated</code>所在组件的 VNode <strong>及其孩子的 VNode</strong> 全部更新时调用。</li>
          <li><code>unbind</code>只调用一次， 指令与元素解绑时调用。</li>
        </ol>
      </li>
      <li>
        <strong>钩子函数参数</strong>
        <ol>
          <li>el: 指令所绑定的元素，可以用来直接操作 DOM 。</li>
          <li>
            binding: 一个对象，包含以下属性：
            <ol>
              <li><strong>name:</strong> 指令名，不包括 <code>v-</code> 前缀。</li>
              <li><strong>value: </strong>指令的绑定值， 例如： <code>v-my-directive="1 + 1"</code>, value 的值是 2。</li>
              <li><strong>oldValue: </strong>指令绑定的前一个值，仅在 <code>update</code>和 <code>componentUpdated</code> 钩子中可用。无论值是否改变都可用。</li>
              <li><strong>expression: </strong>绑定值的字符串形式。 例如 <code>v-my-directive="1 + 1"</code> ， <code>expression 的值是 "1 + 1"。</code></li>
              <li><strong>arg: </strong>传给指令的参数。例如 <code>v-my-directive:foo， arg 的值是 "foo"。</code></li>
              <li><strong>modifiers: </strong>一个包含修饰符的对象。 例如： <code>v-my-directive.foo.bar</code>, 修饰符对象 modifiers 的值是 <code>{ foo: true, bar: true }。</code></li>
            </ol>
          </li>
          <li>vnode: Vue 编译生成的虚拟节点，查阅 <a href="https://cn.vuejs.org/v2/api/#VNode接口" target="_blank">VNode API</a> 了解更多详情</li>
          <li>oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</li>
        </ol>
      </li>
      <li>
        <strong class="warning">注意:</strong>
        除了 <code>el</code> 之外，其它参数都应该是只读的，尽量不要修改他们。如果需要在钩子之间共享数据，建议通过元素的 <strong>dataset</strong> 来进行。
      </li>
    </ul>
    <ul>
      <span class="warning">例子列表：</span>
      <ol>
        <li><code>1、限制输入的字符长度</code></li>
        <li><code>2、传多个参数</code></li>
        <li><code>3、只能输入数字</code></li>
        <li><code>4、账号输入，自动切换焦点</code></li>
        <li><code>5、外部关闭的下拉菜单</code></li>
        <li><code>6、实时时间转换</code></li>
      </ol>
    </ul>
    <h5>例子1:</h5>
    <pre>
      <code class="html">
 &lt;input type=&quot;text&quot; v-maxlength=&quot;demo1.str&quot; v-model=&quot;demo1.str&quot;&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
  export default {
    props: [],
    data() {
      return {
        demo1: {
          str: ''
        }
      }
    },
    directives: {
      // 限制输入的字符长度
      maxlength: {
        bind(el, binding, vnode) {
          // console.log('bind')
        },
        inserted() {
          // console.log('inserted')
        },
        update(el, binding, vnode) {
          // el.value = '测试'
         // console.log(binding.value)
          let str = binding.value
          if(str.length >= 10) {
            el.value = str.substr(0, 10)
          }
        },
        componentUpdated() {
          // console.log('componentUpdated')
        },
        unbind() {
          // console.log('unbind')
        }
      }
    }
  }
      </code>
    </pre>

    <div class="demo-box">
      <input type="text" v-maxlength="demo1.str" v-model="demo1.str" placeholder="长度10个">
    </div>

    <h5>例子2: 传多个参数</h5>
    <pre>
      <code class="html">
&lt;div v-demo=&quot;{ color: &#x27;white&#x27;, text: &#x27;hello!&#x27; }&quot;&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
export default {
    props: [],
    data() {
      return {}
    },
    mounted() {
    },
    directives: {
      // 传值
      demo: {
        bind(el, binding, vnode) {
          $(el).children('span').eq(0).html(binding.value.color)  // 输出：white
          $(el).children('span').eq(1).html(binding.value.text)   // 输出：hello!
        },
        inserted() {
          // console.log('inserted')
        },
        update() {
          // console.log('update')
        },
        componentUpdated() {
          // console.log('componentUpdated')
        },
        unbind() {
          // console.log('unbind')
        }
      }
    }
  }
      </code>
    </pre>
    <div class="demo-box">
      <div v-demo="{ color: 'white', text: 'hello!' }">
        <p>传递json</p>
        <span></span>
        <span></span>
      </div>
    </div>

    <h5>例子3: 只能输入数字</h5>
    <div class="demo-box">
      <input type="text" placeholder="只能输入数字" v-model="numberOnly" v-numberonly>
    </div>
    <pre>
      <code class="html">
&lt;input type=&quot;text&quot; placeholder=&quot;只能输入数字&quot; v-model=&quot;numberOnly&quot; v-numberonly&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
numberonly: {
    update(el, binding, vnode) {
      let val = el.value
      el.value = val.replace(/\D+/, '')
    }
  }
      </code>
    </pre>

    <h5>例子4: 账号输入，自动切换焦点</h5>
    <div class="demo-box">
      <div class="number-box">
        <input type="text" name="number1" v-autofocus="0" v-model="demo5.num0" maxlength="1">
        <input type="text" name="number2" v-autofocus="1" v-model="demo5.num1" maxlength="1">
        <input type="text" name="number3" v-autofocus="2" v-model="demo5.num2" maxlength="1">
        <input type="text" name="number4" v-autofocus="3" v-model="demo5.num3" maxlength="1">
        <input type="text" name="number5" v-autofocus="4" v-model="demo5.num4" maxlength="1">
        <input type="text" name="number6" v-autofocus="5" v-model="demo5.num5" maxlength="1">
        <input type="text" name="number7" v-autofocus="6" v-model="demo5.num6" maxlength="1">
        <input type="text" name="number8" v-autofocus="7" v-model="demo5.num7" maxlength="1">
      </div>
    </div>
    <pre>
      <code class="html">
&lt;div class=&quot;number-box&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number1&quot; v-autofocus=&quot;0&quot; v-model=&quot;demo5.num0&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number2&quot; v-autofocus=&quot;1&quot; v-model=&quot;demo5.num1&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number3&quot; v-autofocus=&quot;2&quot; v-model=&quot;demo5.num2&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number4&quot; v-autofocus=&quot;3&quot; v-model=&quot;demo5.num3&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number5&quot; v-autofocus=&quot;4&quot; v-model=&quot;demo5.num4&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number6&quot; v-autofocus=&quot;5&quot; v-model=&quot;demo5.num5&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number7&quot; v-autofocus=&quot;6&quot; v-model=&quot;demo5.num6&quot; maxlength=&quot;1&quot;&gt;
   &lt;input type=&quot;text&quot; name=&quot;number8&quot; v-autofocus=&quot;7&quot; v-model=&quot;demo5.num7&quot; maxlength=&quot;1&quot;&gt;
&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="js">
autofocus: {
  bind(el, binding, vnode) {

  },
  inserted(el, binding, vnode) {
    let parentNode = el.parentNode
    let inputArr = parentNode.querySelectorAll('input')
    // TODO 获取input框父节点
    el.addEventListener('keydown', function (e) {
      let index = binding.value
      if (e.keyCode === 8 && el.value.length === 0 & index > 0) {
        console.log(index)
        // 自动焦点切换
        inputArr[--index].focus()
      }
    })
    el.addEventListener('keyup', function (e) {
      let val = el.value
      let index = binding.value
      el.value = val.replace(/\D+/, '')
      // 判断是否值
      if (el.value.length === 1 && index < 7 && e.keyCode !== 8) {
        // 自动焦点切换
        inputArr[++index].focus()
      }
    })
  },
  update(el, binding, vnode) {

  },
  componentUpdated() {
    // console.log('componentUpdated')
  },
  unbind() {
    // console.log('unbind')
  }
}
      </code>
    </pre>

    <h5>例子5: 外部关闭的下拉菜单</h5>
    <div class="demo-box">
      <clickoutsideComponent></clickoutsideComponent>
    </div>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div class=&quot;main&quot; v-clickoutside=&quot;handlerClose&quot;&gt;
    &lt;button @click=&quot;show = !show&quot; class=&quot;btn&quot;&gt;点击显示下拉菜单&lt;/button&gt;
    &lt;div class=&quot;dropdown&quot; v-show=&quot;show&quot;&gt;
      &lt;p&gt;下拉框的内容，点击外面区域可以关闭&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import clickoutside from &#x27;./clickoutside.js&#x27;
  export default {
    name: &#x27;clickoutside&#x27;,
    directives: {
    // 外部关闭的下拉菜单
      clickoutside: clickoutside
    },
    data () {
      return {
        show: false
      }
    },
    methods: {
      handlerClose () {
        this.show = false
      }
    }
  }
&lt;/script&gt;

&lt;style scoped lang=&quot;stylus&quot;&gt;
.main
  width: 125px
  .btn
    display: block
    width: 100%
    color: #fff
    background-color: #39f
    border: 0
    padding: 6px
    text-align: center
    font-size: 12px
    border-radius: 4px
    cursor: pointer
    outline: none
    position: relative
  .btn:active
    top: 1px
    left: 1px
  .dropdown
    width: 100%
    height: 150px
    margin: 5px 0
    font-size: 12px
    background-color: #fff
    border-radius: 4px
    box-shadow: 0 1px 6px rgba(0,0,0,.2)
    p
      display: inline-block
      padding: 6px
&lt;/style&gt;
      </code>
    </pre>

    <pre v-pre>
      <code>
// clickoutside.js 文件
// 外部关闭的下拉菜单
export default {
  bind (el, binding, vnode) {
    function documentHandler (e) {
      // contains 是用来判断A元素是否包含B元素
      // 判断点击区域是否是指令所在的元素内部，是，就跳出函数，不往下执行
      if (el.contains(e.target)) {
        return false
      }
      // 判断当前指令有没有写表达式
      if (binding.expression) {
        // 执行当前上下文 methods 中指定的函数
        binding.value(e)
      }
    }
    // 在自定义指令中，不能用this.xxx的形式在上下文中声明一个变量，所以用了el.__vueClickOutside__引用了documentHandler，这样可以在unbind钩子里移除对document的click对象
    el.__vueClickOutside__ = documentHandler
    document.addEventListener(&#x27;click&#x27;, documentHandler)
  },
  unbind (el, binding) {
    // 移除事件，如果不移除，当组件或元素销毁时，它仍然存在于内存中
    document.removeEventListener(&#x27;click&#x27;, el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}

      </code>
    </pre>

    <h5>例子6: 实时时间转换</h5>
    <div class="demo-box">
      <timeComponent></timeComponent>
    </div>
    <pre v-pre>
   <code>
&lt;!-- vue文件 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;div v-time=&quot;timeNow&quot;&gt;&lt;/div&gt;
    &lt;div v-time=&quot;timeBefore&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import time from &#x27;./time.js&#x27;
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
&lt;/script&gt;

   </code>
 </pre>
    <pre v-pre>
      <code>
// time.js
// 实时时间转换
import timeFn from './timeFn.js'
export default {
  // 在bind钩子里,将指令v-time表达式的值binding.value作为参数传入Time.getFormatTime()方法得到格式化时间，在通过el.innerHTML写入指令所在元素，定时器el.__timeout每分钟触发一次更新时间，并且在unbind钩子里清除掉
  bind (el, binding, vnode) {
    el.innerHTML = timeFn.getFormatTime(binding.value)
    el.__timeout__ = setInterval(function () {
      el.innerHTML = timeFn.getFormatTime(binding.value)
    }, 6000)
  },
  unbind (el, binding) {
    clearInterval(el.__timeout__)
    delete el.__timeout__
  }
}

      </code>
    </pre>
    <pre v-pre>
      <code>
// timeFn.js
let time = {}
// 获取当期时间错
time.getUnix = () => {
  let date = new Date()
  return date.getTime()
}

// 获取今天0点0分0秒的时间戳
time.getTodayUnix = () => {
  let date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

// 获取今年1月1日0点0分0秒的时间戳
time.getYearUnix = () => {
  let date = new Date()
  date.setMonth(0)
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

// 获取标准年月日
time.getLastDate = (time) => {
  let date = new Date(time)
  let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return date.getFullYear() + '-' + month + '-' + day
}

// 转换时间
time.getFormatTime = (timestamp) => {
  let now = time.getUnix() // 当前时间戳
  let today = time.getTodayUnix() // 今天0点时间戳
  let year = time.getYearUnix() // 今年0点时间戳
  let timer = (now - timestamp) / 1000 // 转换为秒级时间戳
  let tip = ''
  if (timer <= 0) {
    tip = '刚刚'
  } else if (Math.floor(timer / 60) <= 0) {
    tip = '刚刚'
  } else if (timer < 3600) {
    tip = Math.floor(timer / 60) + '分钟前'
  } else if (timer >= 3600 && (timestamp - today >= 0)) {
    tip = Math.floor(timer / 3600) + '小时前'
  } else if (timer / 86400 <= 31) {
    tip = Math.ceil(timer / 86400) + '天前'
  } else {
    tip = time.getLastDate(timestamp)
  }
  return tip
}

export default time

      </code>
    </pre>
  </div>
</template>
<style scoped>
  .number-box input{
    font-weight: bold;
    text-align: center;
    font-size: 15px;
    width: 30px;
    height: 40px;
  }
</style>
<script>
  import maxlength from './maxlength.js'
  import parameter from './parameter.js'
  import numberonly from './numberonly.js'
  import autofocus from './autofocus.js'
  import clickoutsideComponent from './clickoutside/clickoutside.vue'
  import timeComponent from './time/time.vue'
  export default {
    props: [],
    data () {
      return {
        demo1: {
          str: ''
        },
        numberOnly: '',
        demo5: {
          num: '',
          num0: '',
          num1: '',
          num2: '',
          num3: '',
          num4: '',
          num5: '',
          num6: '',
          num7: ''
        }
      }
    },
    mounted () {
    },
    directives: {
      // 限制输入的字符长度
      maxlength: maxlength,
      demo: parameter,
      // 支持输入数字
      numberonly: numberonly,
      // 数字自动切换焦点
      autofocus: autofocus
    },
    methods: {
    },
    components: {
      clickoutsideComponent,
      timeComponent
    },
    watch: {}
  }
</script>
