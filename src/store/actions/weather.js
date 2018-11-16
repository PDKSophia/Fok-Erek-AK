/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */
import Taro from '@tarojs/taro'
import {
  REQUEST_FETCH_WEATHER,
  RECEIVE_FETCH_WEATHER,
  CHANGE_CURRENT_CITY
} from '../constants/weather'


export const requestCityWeather = () => ({
  type: REQUEST_FETCH_WEATHER
})

export const receiveCityWeather = (jsondata) => ({
  type: RECEIVE_FETCH_WEATHER,
  data: jsondata 
})

export const fetchCityWeather = (cityid) => dispatch => {
  dispatch(requestCityWeather())
  Taro.request({
    url : `http://aider.meizu.com/app/weather/listWeather?cityIds=${cityid}`,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then((res) => {
    dispatch(receiveCityWeather(res.data.value[0]))
  }).catch((err) => {
    console.log(err)
  })
}

export const receiveCurrentCity = (jsondata) => dispatch => {
  dispatch({
    type: CHANGE_CURRENT_CITY,
    data: jsondata
  })
}
