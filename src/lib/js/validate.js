export function validateLogin (username, password) {
  if (!username) {
    return '用户名不能为空'
  }
  if (!password) {
    return '密码不能为空'
  }
  return true
}
