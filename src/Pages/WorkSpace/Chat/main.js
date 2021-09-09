import Vue from 'vue'
import Chat from './Chat.vue'
import VueRouter from "vue-router";
import {getRouter} from "@/router";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: h => h(Chat),
    router: getRouter()
}).$mount('#app')
