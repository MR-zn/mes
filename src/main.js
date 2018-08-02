import Vue from 'vue'
import App from './App' /*引入App这个组件*/
import router from './router' /*引入路由配置*/
import Button from './components/button'
import ButtonGroup from './components/button-group'
  Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)

  /* eslint-disable no-new */
  new Vue({
      el: '#app'
    //   router,
    //   template: "<App/>",
    //   components: {
    //       App
    //   },
    //   render: h => h(App)
  })