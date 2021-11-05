import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const listaRutas = [
    {path: "/", name: "inicio", component: () => import("../components/cpte_inicio.vue")},
    {path: "/adm", name: "administracion", component: () => import("../components/cpte0_administracion.vue")},
    {path: "/rst", name: "restaurante", component: () => import("../components/cpte1_restaurante.vue")},
    {path: "/bar", name: "bar", component: () => import("../components/cpte2_bar.vue")},
    {path: "/bll", name: "billar", component: () => import("../components/cpte3_billar.vue")},
    {path: "/psd", name: "posada", component: () => import("../components/cpte4_posada.vue")},
    {path: "/err", name: "error", component: () => import("../components/cpte_error.vue")}
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    listaRutas
});

export default router;