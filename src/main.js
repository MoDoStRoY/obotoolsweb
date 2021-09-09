import Vue from 'vue'
import App from "./App.vue"
import VueRouter from "vue-router";
import {getRouter} from "@/router";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: getRouter()
}).$mount('#app')
