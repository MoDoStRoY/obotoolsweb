import Vue from 'vue'
import WorkSpace from './WorkSpace.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(WorkSpace),
}).$mount('#app')