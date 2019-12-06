import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:data
  },
  mutations: {
    btn(state,id){
      let ob=id.id
      state.list=state.list.filter(item=>item.nm.includes(ob))
    }
  },
  actions: {
  },
  modules: {
  }
})
