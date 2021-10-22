import Vue from "vue"
import ApPrincipal from "./App.vue"
import "./assets/css/larruta.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(ApPrincipal),
}).$mount("#appPrincipal")
