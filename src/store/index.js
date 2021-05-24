import { createStore } from 'vuex'

export default createStore({
  state: {
    userinfo: null
  },
  mutations: {
    login(state,data){
      state.token = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
