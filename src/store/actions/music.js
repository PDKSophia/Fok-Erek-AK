/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */
import Taro from '@tarojs/taro'
import {
  SAVE_AUDIO_CONTEXT,
  REQUEST_MUSIC_LIST,
  RECEIVE_MUSIC_LIST,
  TIGGER_SAVE_MUSIC_ITEM,
  PAUSE_MUSIC
} from '../constants/music'

export const saveAudioContext = () => ({
  type: SAVE_AUDIO_CONTEXT
})

export const requestMusicList = () => ({
  type: REQUEST_MUSIC_LIST
})

export const receiveMusicList = (jsondata) => ({
  type: RECEIVE_MUSIC_LIST,
  data: jsondata 
})

export const tiggerSaveCurrentMusic = (jsondata) => ({
  type: TIGGER_SAVE_MUSIC_ITEM,
  data: jsondata
})

export const pauseMusicPlay = () => ({
  type: PAUSE_MUSIC
})

export const fetchYunMusicList = (al_id) => dispatch => {
  dispatch(requestMusicList())
  Taro.request({
    url: `http://www.pengdaokuan.cn/music/restful/api/list.php`,
    method: 'POST',
    data: {
      al_id: al_id
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    dispatch(receiveMusicList(res.data))
  }).catch((err) => {
    console.log(err)
  })
}

export const fetchTiggerSaveMusicItem = (jsondata) => dispatch => {
  dispatch(tiggerSaveCurrentMusic(jsondata))
}