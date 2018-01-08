export default {
  update (el, binding, vnode) {
    let val = el.value
    el.value = val.replace(/\D+/, '')
  }
}
