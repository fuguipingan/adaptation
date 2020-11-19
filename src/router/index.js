import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>import(/* webpackChunkName: "about" */ "../pages/Home")
  },
];

const router = new VueRouter({
  routes
});

export default router;
