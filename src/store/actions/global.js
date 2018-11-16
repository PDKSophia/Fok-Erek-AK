/**
 * @Author: 彭道宽
 * @Date:   2018-11-04
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-16
 */
// import Taro from '@tarojs/taro'
import {
  SAVE_PHONE_SYSTEM,
  START_FETCH,
  STOP_FETCH
} from '../constants/global'

export const savePhoneSystem = (phoneSystem) => dispatch => {
  dispatch({
    type: SAVE_PHONE_SYSTEM,
    data: phoneSystem
  })
}

export const startFetch = () => ({
  type: START_FETCH
})

export const stopFetch = () => ({
  type: STOP_FETCH
})