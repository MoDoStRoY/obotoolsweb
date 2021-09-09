import VueRouter from "vue-router";
import App from "./App.vue";
import WorkSpace from "./Pages/WorkSpace/WorkSpace.vue";
import PaymentCorrection from "./Pages/WorkSpace/PaymentCorrection/PaymentCorrection.vue";
import Chat from "./Pages/WorkSpace/Chat/Chat.vue";

/*const router = new VueRouter({
    routes:
        [
            {path: "/loginPage", component: App},
            {path: "/workSpace", component: WorkSpace},
            {path: "/correctionPayment", component: PaymentCorrection},
            {path: "/chat", component: Chat}
        ],
    mode: "history"
})*/

export function getRouter()
{
    return new VueRouter({
        routes:
            [
                {path: "/loginPage", component: App},
                {path: "/workSpace", component: WorkSpace},
                {path: "/correctionPayment", component: PaymentCorrection},
                {path: "/chat", component: Chat}
            ],
        mode: "history"})
}