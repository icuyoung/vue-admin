const state = {
  loginStatus:false,
}

const getters = {
  loginStatus: state => {
      return state.loginStatus
  }
}

const actions = {
  setLoginStatus: ({commit},loginStatus) => {
    commit("SET_LOGINSTATUS",loginStatus)
  }
}

const mutations = {
  ["SET_LOGINSTATUS"](state,loginStatus) {
    state.loginStatus = loginStatus
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

