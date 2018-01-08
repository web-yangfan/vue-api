// 外部关闭的下拉菜单
export default {
  bind (el, binding, vnode) {
    function documentHandler (e) {
      // contains 是用来判断A元素是否包含B元素
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
