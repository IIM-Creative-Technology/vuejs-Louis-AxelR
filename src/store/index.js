
import Vuex from 'vuex'


export default new Vuex.Store({
  state: {
    post:[

    ]
  },
  mutations: {
    createpost(state, payload){
      state.post.push(payload)
    },
    deletepost(state, payload) {
      state.post.splice(payload, 1)
    },
  },
  actions: {
    createpost(context, payload){
      console.log(payload)
      context.commit('createpost', payload)
    }
  },
  modules: {
  }
})
