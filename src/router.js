import Router from "vue-router";
import Home from "./pages/index";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/:category",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
