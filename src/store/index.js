import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    usermessage: [
      {
        id: 1,
        username: 'admin',
        password: 'admin123',
        remember: true
      },
      {
        id: 2,
        username: 'guide',
        password: 'guide123',
        remember: false
      }
    ]
  },
  mutations: {
    increasstate: function(user) {
      if(user instanceof Object) {
        user.id = this.usermessage.length
        this.usermessage.push(user)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})



