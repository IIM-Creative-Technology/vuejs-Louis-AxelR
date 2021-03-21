
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
      if (!payload.img ) {
        payload.img = "https://www.soonnight.com/images/upload/contenu/photos/2016/01/05/zidane_0-8576.jpg"
      }
      context.commit('createpost', payload)
    }
  },
  modules: {
  }
})
