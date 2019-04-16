import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/member/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchGet('/member/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchGet('/member/checkLogin', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/member/register', params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost('/member/imgaeUpload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/member/updateheadimage', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/static/mock/home.json', params)
}
// 首页接口
export const navList = (params) => {
  return http.fetchGet('/static/mock/navList.json', params)
}
// 推荐板块
export const recommend = (params) => {
  return http.fetchGet('/static/mock/recommend.json', params)
}

