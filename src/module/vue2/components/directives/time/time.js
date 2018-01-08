// 实时时间转换
import timeFn from './timeFn.js'
export default {
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
