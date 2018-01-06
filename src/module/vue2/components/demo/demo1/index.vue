<template>
  <div class="container">
    <h5> 数字输入框 </h5>
    <br><br>
    <div class="demo-box">
      <p>父组件属性：{{value}}</p>
      <p>通知父组件value值被子组件改了：{{value}}</p>
      <input-number v-model="value" :max="10" :min="0" @on-change="onChange"></input-number>
    </div>

    <h5>index.vue</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;!-- index.html --&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;p&gt;父组件属性：{{value}}&lt;/p&gt;
    &lt;p&gt;通知父组件value值被子组件改了：{{value}}&lt;/p&gt;
    &lt;input-number v-model=&quot;value&quot; :max=&quot;10&quot; :min=&quot;0&quot; @on-change=&quot;onChange&quot;&gt;&lt;/input-number&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
// Vue2通过props传递的数据是单向数据流，父组件数据变化会传递给子组件，但是反过来就不行了
import inputNumber from &#x27;./input_number.vue&#x27;
export default {
  data () {
    return {
      value: 5
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  },
  components: {
    inputNumber
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <h5>iinput_number.vue</h5>
    <pre v-pre>
      <code>
&lt;template&gt;
  &lt;div class=&quot;input-number&quot;&gt;
    &lt;input type=&quot;text&quot; :value=&quot;currentValue&quot; @change=&quot;handlerChange&quot;&gt;
    &lt;button @click=&quot;handlerDown&quot; :disabled=&quot;currentValue &lt;= min&quot;&gt;-&lt;/button&gt;
    &lt;button @click=&quot;handlerUp&quot; :disabled=&quot;currentValue &gt;= max&quot;&gt;+&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;

&lt;/style&gt;

&lt;script&gt;
  export default {
    props: {
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    mounted () {
      this.updateValue(this.value)
    },
    methods: {
      // input绑定Change，手动输入值，对手动输入的值进行过滤
      handlerChange (event) {
        let val = event.target.value.trim()

        let max = this.max
        let min = this.min
        if (this.isValueNumber(val)) {
          val = Number(val)
          this.currentView = val

          if (val &gt; max) {
            this.currentValue = max
          } else if (val &lt; min) {
            this.currentValue = min
          }
        } else {
          event.target.value = this.currentValue
        }
      },
      // 减
      handlerDown () {
        if (this.currentValue &lt;= this.min) return
        this.currentValue -= 1
      },
      // 加
      handlerUp () {
        if (this.currentValue &gt;= this.max) return
        this.currentValue += 1
      },
      // input值改了对值的范围监控
      updateValue (val) {
        if (val &gt; this.max) val = this.max
        if (val &lt; this.min) val = this.min
        this.currentValue = val
      },
      // 验证
      isValueNumber (value) {
        return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9] * $) | (^-?0{1}$) /).test(value + &#x27;&#x27;)
      }
    },
    watch: {
      currentValue: function (val) {
        this.$emit(&#x27;input&#x27;, val)
        this.$emit(&#x27;on-change&#x27;, val)
      },
      value: function (val) {
        this.updateValue(val)
      }
    }
  }
&lt;/script&gt;

      </code>
    </pre>
  </div>
</template>

<script>
// Vue2通过props传递的数据是单向数据流，父组件数据变化会传递给子组件，但是反过来就不行了
import inputNumber from './input_number.vue'
export default {
  data () {
    return {
      value: 5
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  },
  components: {
    inputNumber
  }
}
</script>

