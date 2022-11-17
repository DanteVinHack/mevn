export default {
  state: {
    loader: false,
  },
  getters: {
    getLoader({ loader }) {
      return loader;
    }
  },
  mutations: {
    toggleLoader(state) {
      return state.loader = !state.loader;
    }
  }
}