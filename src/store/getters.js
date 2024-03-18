const getters = {
  sidebar: state => state.app.sidebar, // 获取app模块的属性
  device: state => state.app.device,
  token: state => state.user.token, // 获取user模块的属性
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
// getters只是做了便捷访问，例如要获取sidebar，如果没有getters，则需要state.app.sidebar
// 而有了getters后，只需getters.sidebar，即“能少一点是一点”
export default getters
