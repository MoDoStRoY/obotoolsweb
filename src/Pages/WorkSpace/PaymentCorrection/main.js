import Vue from 'vue'
import PaymentCorrection from './PaymentCorrection.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(PaymentCorrection),
}).$mount('#app')