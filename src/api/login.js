// 登录等操作的 请求

// 引入 axios 
import request from '@/utils/request'

/**
 * 手机登录 发送验证码
 * @param {Number} phone 手机号 
 */
export const getUser = (phone) => {
  return request({
    url: 'api/captcha/sent',
    method: 'GET',
    params: {
      phone
    }
  })
}

/**
 * 验证验证码
 * @param {Number} phone 手机号 
 * @param {str} captcha 验证码
 */
 export const codeCheck = (phone, captcha) => {
  return request({
    url: 'api/captcha/verify',
    method: 'GET',
    params: {
      phone,
      captcha
    }
  })
}

/**
 * 登录后调用获取用户信息
 */
 export const getUserInformation = () => {
  return request({
    url: 'api/user/account',
    method: 'GET',
  })
}
