import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
  // console.log("=== router.js > rejectAuthUser > store.state.isLogin check");
  // console.log("=== store.state.isLogin : [" + store.state.isLogin + "]");
  if (store.state.isLogin === true) {
    alert("이미 로그인을 하였습니다.");
    next("/");
  } else {
    // next();
    next();
  }
};

const onlyAuthUser = (to, from, next) => {
  // console.log("=== router.js > onlyAuthUser > store.state.isLogin check");
  // console.log("=== store.state.isLogin : [" + store.state.isLogin + "]");
  if (store.state.isLogin === false) {
    alert("로그인이 필요한 서비스 입니다.");
    next("/login");
  } else {
    next();
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser,
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Mypage.vue")
    }
  ]
});
