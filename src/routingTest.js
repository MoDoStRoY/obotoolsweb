import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const App = {template: '<div>mainBlock</div>'}
const WorkSpace = { template: '<div>mainBlock</div>' }

const routes =
    [
        {path: '/App', component: App},
        {path: '/WorkSpace', component: WorkSpace}
    ]

const router = new VueRouter({routes: routes, mode: 'history'})