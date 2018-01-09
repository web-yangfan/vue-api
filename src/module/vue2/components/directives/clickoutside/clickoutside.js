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
    document.addEventListener('click', documentHandler)
  },
  unbind (el, binding) {
    // 移除事件，如果不移除，当组件或元素销毁时，它仍然存在于内存中
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
