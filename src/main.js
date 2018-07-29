  import Vue from 'vue'
  import App from './App' /*引入App这个组件*/

  import Button from './components/button'
  //   import router from './router' /*引入路由配置*/
  Vue.config.productionTip = false
  //   Vue.component('App', App)
  Vue.component('g-button', Button)

  /* eslint-disable no-new */
  new Vue({
      el: '#app',
      //   router,
  })