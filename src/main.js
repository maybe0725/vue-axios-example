import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // =============================================================================================================
  // Vue컴포넌트는 Dispatch(‘[action메소드명]’)를 통해 Vuex store의 Action 그룹에 속한 메서드를 실행시킬 수 있습니다.
  // html event : @click="$store.dispatch('logout')
  // script method : this.$store.dispatch("getMemberInfo");
  // =============================================================================================================
  beforeCreate() {
    this.$store.dispatch("getMemberInfo"); // store > action group > getMemberInfo method call
  },
  render: h => h(App) // App.vue rendering
}).$mount("#app"); // index.html mount (...<div id="app"></div>...)
