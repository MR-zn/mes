import Vue from 'vue'
import App from './App' /*引入App这个组件*/
import router from './router' /*引入路由配置*/
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
      el: '#app',
      router,
      template: "<App/>",
      components: {
          App
      },
      render: h => h(App)
  })