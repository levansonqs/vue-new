import Vue from "vue";
import Router from "vue-router";

import router from "./router";
import App from "./App";

import "../scss/app.scss";
Vue.config.productionTip = false;
Vue.use(Router);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
