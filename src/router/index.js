import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/button'
// import rootApp from '../components/rootApp'
// import hello from '../components/hello'
// import world from '../components/world'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Button 
    }/*, {
        path: '/hello',
        component: hello
    }, {
        path: '/world',
        component: world
    }*/]
})