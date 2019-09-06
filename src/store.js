import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // ==========================================================
    // mutations 는 state의 값을 변경관리 하는 것에만 촛점을 맞춘다.
    // ==========================================================
    // 로그인 성공
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    // 로그아웃
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    // ==================================================
    // Step 1. 로그인 -> 토큰 반환
    // [Request]
    //   {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    //   }
    // ==================================================
    login({ dispatch }, loginObj) {
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          console.log(res);
          let token = res.data.token;
          localStorage.setItem("access_token", token);
          dispatch("getMemberInfo");
        })
        // .catch(err => {
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
    // ==================================================
    // Step 2. 반환된 토큰을 사용하여 사용자 정보 요청
    // ==================================================
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("access_token");
      // console.log("=== store.js > getMemberInfo > token check");
      // console.log(token);
      if (token !== null) {
        let config = {
          headers: {
            access_token: token
          }
        };
        axios
          .get("https://reqres.in/api/users/2", config)
          .then(response => {
            let userInfo = {
              id: response.data.data.id,
              first_name: response.data.data.first_name,
              last_name: response.data.data.last_name,
              avatar: response.data.data.avatar
            };
            commit("loginSuccess", userInfo);
            router.push({ name: "mypage" });
          })
          // .catch(error => {
          .catch(() => {
            alert("이메일과 비밀번호를 확인하세요.");
          });
      }
    },
    // ==================================================
    // 로그아웃
    // ==================================================
    logout({ state, commit }) {
      commit("logout");
      localStorage.removeItem("access_token");
      console.log("=== store.js > actions > logout");
      console.log("=== state.isLogin : [" + state.isLogin + "]");
      router.push({ name: "home" });
    }
  }
});
