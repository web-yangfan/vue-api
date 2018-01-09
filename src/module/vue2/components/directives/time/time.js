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
