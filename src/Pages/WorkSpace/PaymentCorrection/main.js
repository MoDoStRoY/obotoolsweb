import Vue from 'vue'
import PaymentCorrection from './PaymentCorrection.vue'
import VueRouter from "vue-router";
import {getRouter} from "@/router";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: h => h(PaymentCorrection),
    router: getRouter()
}).$mount('#app')