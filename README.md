# Vuex & Router 로그인 상태관리 예제

<br/>

## 1. Vue CLI 프로젝트 생성

- [Vue CLI GitHub](https://github.com/vuejs/vue-cli)

```sh
# Vue CLI 프로젝트 생성
# vue create <project_name>
$ vue create vue-axios-example

  Vue CLI v3.10.0
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex, Linter
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Pick a linter / formatter config: Prettier
  ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
  ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
  ? Save this as a preset for future projects? No

# vue-axios-example directory 이동
$ cd vue-axios-example

# project run
$ npm run serve
```

<br/>

## 2. vuetify plugin 추가

- [Vuetify GitHub](https://github.com/vuetifyjs/vuetify)
- [Vuetify](https://vuetifyjs.com/ko/)
- [Vuetify quick-start](https://vuetifyjs.com/ko/getting-started/quick-start)

`vuetify 설치(Default)`

```sh
# vue-cli-plugin-vuetify
$ vue add vuetify

  ...
  ✔  Successfully installed plugin: vue-cli-plugin-vuetify
  ...
  ? Choose a preset: Default (recommended)
  ...
  ✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
  The following files have been updated / added:

     src/assets/logo.svg
     src/plugins/vuetify.js
     package-lock.json
     package.json
     public/index.html
     src/App.vue
     src/components/HelloWorld.vue
     src/main.js
     src/views/Home.vue

   You should review these changes with git diff and commit them.
  ...
```

<br/>

## 3. Axios 설치

- [Axios GitHub](https://github.com/axios/axios)

```sh
$ npm install axios --save
```

<br/>

- [Fake Api Server](https://reqres.in/)
- [Postman](https://www.getpostman.com/)
