import Vue from "vue";
import ApPrincipal from "./App.vue";
import router from "./router";
import "./assets/css/larruta.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(ApPrincipal),
}).$mount("#appPrincipal");
