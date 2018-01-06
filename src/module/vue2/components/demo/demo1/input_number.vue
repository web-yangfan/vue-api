<template>
  <div class="input-number">
    <input type="text" :value="currentValue" @change="handlerChange">
    <button @click="handlerDown" :disabled="currentValue <= min">-</button>
    <button @click="handlerUp" :disabled="currentValue >= max">+</button>
  </div>
</template>

<style scoped>

</style>

<script>
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

          if (val > max) {
            this.currentValue = max
          } else if (val < min) {
            this.currentValue = min
          }
        } else {
          event.target.value = this.currentValue
        }
      },
      // 减
      handlerDown () {
        if (this.currentValue <= this.min) return
        this.currentValue -= 1
      },
      // 加
      handlerUp () {
        if (this.currentValue >= this.max) return
        this.currentValue += 1
      },
      // input值改了对值的范围监控
      updateValue (val) {
        if (val > this.max) val = this.max
        if (val < this.min) val = this.min
        this.currentValue = val
      },
      // 验证
      isValueNumber (value) {
        return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9] * $) | (^-?0{1}$) /).test(value + '')
      }
    },
    watch: {
      currentValue: function (val) {
        this.$emit('input', val)
        this.$emit('on-change', val)
      },
      value: function (val) {
        this.updateValue(val)
      }
    }
  }
</script>
