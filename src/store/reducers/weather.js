/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */
import {
  REQUEST_FETCH_WEATHER,
  RECEIVE_FETCH_WEATHER,
  CHANGE_CURRENT_CITY
} from '../constants/weather'

const INITIAL_STATE = {
  isFetchWeather: false,
  cCity: {
    city: '成都',
    cityid: 101270101
  },
  cityWeather: {
    city: '',
    weatherDetailsInfo: {
      weather3HoursDetailsInfos: [
        {
          lowerestTemperature: '0',
          highestTemperature: '0'
        }
      ]
    },
    weathers: []
  }
}

export default function weather (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_FETCH_WEATHER :
      return {
        ...state,
        isFetchWeather: true
      }
    case RECEIVE_FETCH_WEATHER :
      let wea = action.data
      return {
         ...state,
         cityWeather: wea
       }
    case CHANGE_CURRENT_CITY :
      let curCity = action.data
      return {
        ...state,
        cCity: curCity
      }
    default:
       return state
  }
}
  