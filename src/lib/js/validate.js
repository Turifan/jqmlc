export function validateLogin (username, password) {
  if (!username) {
    return '用户名不能为空'
  }
  if (!password) {
    return '密码不能为空'
  }
  return true
}

export function validateProfitInvest (money, dealPassword, selectAccount, code, agree) {
  if (!money) {
    return '购买金额不能为空'
  }
  if (!dealPassword) {
    return '交易密码不能为空'
  }
  if (selectAccount === '2') {
    if (!code) {
      return '验证码不能为空'
    }
  }
  if (!agree) {
    return '请选择同意资金交由平台自由匹配'
  }
  return true
}

export function validateDeposit (money, dealPwd, code) {
  if (!money) {
    return '购买金额不能为空'
  }
  if (!dealPwd) {
    return '交易密码不能为空'
  }
  if (!code) {
    return '验证码不能为空'
  }
  return true
}
