import Vue from "vue";
import App from "./App.vue";
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import router from './router' //追加

Vue.use(VueAxios, axios) //追記
Vue.config.productionTip = false;

new Vue({
  router, //追加 
  render: h => h(App)
}).$mount("#app");
