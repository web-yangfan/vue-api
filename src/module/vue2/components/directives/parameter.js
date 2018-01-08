// 传多个参数
export default {
  bind (el, binding, vnode) {
    $(el).children('span').eq(0).html(binding.value.color)
    $(el).children('span').eq(1).html(binding.value.text)
  },
  inserted () {
    // console.log('inserted')
  },
  update () {
    // console.log('update')
  },
  componentUpdated () {
    // console.log('componentUpdated')
  },
  unbind () {
    // console.log('unbind')
  }
}
