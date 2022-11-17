export default {
  install(Vue) {
    Vue.config.globalProperties.$message = (message) => {
      window.M.toast({ html: message })
    }
  },
}