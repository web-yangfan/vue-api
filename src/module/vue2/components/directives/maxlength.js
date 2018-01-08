// 限制输入的字符长度
export default {
  bind (el, binding, vnode) {
    // console.log('bind')
  },
  inserted () {
    // console.log('inserted')
  },
  update (el, binding, vnode) {
    // el.value = '测试'
    // console.log(binding.value)
    let str = binding.value
    if (str.length >= 10) {
      el.value = str.substr(0, 10)
    }
  },
  componentUpdated () {
    // console.log('componentUpdated')
  },
  unbind () {
    // console.log('unbind')
  }
}
