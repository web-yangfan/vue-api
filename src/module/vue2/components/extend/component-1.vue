<template>
  <div class="extend-box" v-if="isShow">
    <button @click="hide">关闭</button>
    <div>{{content}}</div>
  </div>

</template>

<style>
  .extend-box{
    position: absolute;
    left: 50%;
    top: 50%;
    background: #eeeeee;
    width: 100px;
    height: 100px;
    z-index: 99999;
  }
</style>

<script>
  /**
   * Modal.alert()
   */
  import Vue from 'vue'
  let Layer = null

  export default {
    alert(str){
      let ele = document.querySelector('.extend-box')
      if(!ele) {
        ele=  document.createElement('div')
        ele.classList.add('extend-box')
        document.body.appendChild(ele)
      }
      if(!Layer){
        Layer = Vue.extend(this)
      }

      const Obj = new Layer()
      // 设置组件属性
      Obj.content = str


      // 手动调用vm.$mount()方法来挂载
      Obj.$mount(ele)
    },
    data(){
      return {
        isShow: true,
        content: ''
      }
    },
    methods: {
      hide: function() {
        this.isShow = false
      }
    }
  };

</script>
