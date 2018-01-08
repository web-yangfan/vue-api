export default {
  bind (el, binding, vnode) {

  },
  inserted (el, binding, vnode) {
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
  update (el, binding, vnode) {

  },
  componentUpdated () {
    // console.log('componentUpdated')
  },
  unbind () {
    // console.log('unbind')
  }
}
