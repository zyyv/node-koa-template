import axios from 'axios'

/**
 * 获取几位随机数字
 * @param {number} n 
 */
export const getRandomNumber = (n: number) => String(Math.random()).substring(2, n + 2)

/**
 * 多少分钟
 * @param {number} num 
 */
export const num2Time = (num: number) => ({
  timestamp: num * 1000 * 60,
  text: `${num}分钟`
})

/**
 * 自定义Error
 * @param {string} msessage 错误消息
 * @param {number} status 状态码 默认200
 * @param {boolean} same 是否一起更改ctx的状态码
 */
export const useError = (msessage: string, status = 200, same = true) => {
  const error: any = new Error(msessage)
  error.status = status
  error.same = same
  return error
}

export const getImageInfo = (url: string) => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}?imageInfo`, {}).then((res: any) => {
      resolve(res.data)
    }).catch(() => {
      resolve(null)
    })
  })
}