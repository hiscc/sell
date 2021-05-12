import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setUser } from '@/utils/auth'
import { resetRouter } from '@/router'


const getDefaultState = () => {
  return {
    list: {},
    userInfo: {},
    authedInfo: {},
  }
}

const state = getDefaultState()


const mutations = {
  SUBMIT_FORM: (state, data) => {
    state.list = data
  },
  RESET_FORM: (state) => {
    state.list = {}
  },
  LOAD_USER: (state, data) => {
    state.userInfo = data
    setUser(data)
  },
  LOAD_AUTHEDINFO: (state, data) => {
    state.authedInfo = data
  },
}

const actions = {
  // user login
  save({ commit }, data) {
    return new Promise(resolve => {
      commit('SUBMIT_FORM', data)
      resolve()
    })

  },
  reset({commit}){
    commit('RESET_FORM')
  },
  loadUser({commit}, data){
    commit('LOAD_USER', data)
  },
  loadAuthedInfo({commit}, data){
    commit('LOAD_AUTHEDINFO', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
