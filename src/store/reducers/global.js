/**
 * @Author: 彭道宽
 * @Date:   2018-11-04
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-16
 */
import {
  SAVE_PHONE_SYSTEM,
  START_FETCH,
  STOP_FETCH
} from '../constants/global'

const INITIAL_STATE = {
  isFetchSystemPhone: true,
  globalFetch: false,
  phoneSystem: {}, // 手机设备信息
}

export default function global (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_PHONE_SYSTEM :
      return {
        ...state,
        phoneSystem: {...action.data},
        isFetchSystemPhone: false
      }
    case START_FETCH :
      return {
        globalFetch: true
      }
    case STOP_FETCH :
      return {
        globalFetch: false
      }
    default:
      return state
  }
}