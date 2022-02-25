const getters = {
  sidebarRouters: state => state.permission.sidebarRouters,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar
}
export default getters
