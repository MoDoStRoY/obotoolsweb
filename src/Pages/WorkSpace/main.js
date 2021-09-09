import Vue from 'vue'
import WorkSpace from './WorkSpace.vue'
import VueRouter from "vue-router";
import {getRouter} from "@/router";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: h => h(WorkSpace),
    router: getRouter()
}).$mount('#app')