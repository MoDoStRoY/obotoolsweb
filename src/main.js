import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const WorkSpace = { template: '<div>mainBlock</div>' }

const routes =
[
  {path: '/App', component: App},
  {path: '/WorkSpace', component: WorkSpace}
]

const router = new VueRouter({routes: routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
