/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */
import {
  REQUEST_MOVIE_CATE,
  RECEIVE_MOVIE_CATE
} from '../constants/movie'

const INITIAL_STATE = {
  isFetchMovieCate: false,
  catelist: []
}

export default function weather (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MOVIE_CATE :
      return {
        ...state,
        isFetchMovieCate: true
      }
    case RECEIVE_MOVIE_CATE :
      let cate = action.data
      let upon = {
        id: -1,
        name: '首页',
        apiUrl: ''
      }
      cate.unshift(upon)
      return {
         ...state,
         catelist: cate
       }
    default:
       return state
  }
}