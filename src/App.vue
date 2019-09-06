<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- 
        ******************************************
        Router : How to use
        ------------------------------------------
        Case 1:
          @click="$router.push({name: 'home'})"
          @click="$router.push({path: '/home'})"
          @click="$router.push('/home')"  
        ------------------------------------------
        Case 2:
          router :to="{ name: 'home' }"
          router :to="{ name: 'home' }" exact 
        ******************************************
        -->
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="isLogin === false"
          router
          :to="{ name: 'login' }"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else router :to="{ name: 'mypage' }" exact>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu v-if="isLogin" bottom left offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item router :to="{ name: 'mypage' }">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item @click="logout"> -->
            <v-list-item @click="$store.dispatch('logout')">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-else text router :to="{ name: 'login' }">Log In</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// ===============================================
// <<< vuex helper 함수 종류 >>>
// mapState - state를 연결해주는 함수
// mapGetters - getters를 연결해주는 함수
// mapMutations - mutations를 연결해주는 함수
// mapActions - actions를 연결해주는 함수
// ===============================================

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
// import { mapState, mapActions } from "vuex";

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(["isLogin"]),
    ...mapState(["   /* vuex store > state   group > variable    */ "]),
    ...mapGetters([" /* vuex store > getters group > method call */ "])
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions(["   /* vuex store > actions   group > method call */ "]),
    ...mapMutations([" /* vuex store > mutations group > method call */ "])
  }
};
</script>
