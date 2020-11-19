import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "lib-flexible";//引入移动端适配插件

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
