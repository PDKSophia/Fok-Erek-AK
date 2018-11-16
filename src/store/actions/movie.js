/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */
import Taro from '@tarojs/taro'
import {
  REQUEST_MOVIE_CATE,
  RECEIVE_MOVIE_CATE
} from '../constants/movie'


export const requestMovieCate = () => ({
  type: REQUEST_MOVIE_CATE
})

export const receiveMovieCate = (jsondata) => ({
  type: RECEIVE_MOVIE_CATE,
  data: jsondata 
})

export const fetchEyesMovieCateList = () => dispatch => {
  dispatch(requestMovieCate())
  Taro.request({
    url : `http://baobab.kaiyanapp.com/api/v4/discovery`,
    method : 'get'
  }).then((res) => {
    let catelist = res.data.tabInfo.tabList
    dispatch(receiveMovieCate(catelist))
  }).catch((err) => {
    console.log(err)
  })
}
