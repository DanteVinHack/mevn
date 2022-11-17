import { createStore } from 'vuex'
import loader from './modules/loader'
import user from './modules/user'

export default createStore({
  modules: { 
    user,
    loader
  }
})
