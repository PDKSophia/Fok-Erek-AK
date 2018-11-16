/**
 * 接口url模块
 * @Author: PDK
 * @Date:   2018-08-31
 * @Last modified by:   PDK
 * @Last modified time: 2018-08-31
 */
import Taro from '@tarojs/taro'

export default {
  /**
   * 调用魅族天气API，回城市天气信息
   * @returns {[object]}
  */
  taroFetchWeather (_url) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url : _url,
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then((res) => {
          resolve(res)
      }).catch((err) => {
          reject(err)
      })
    })
  }
}