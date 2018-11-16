/**
 * @Author: 彭道宽
 * @Date:   2018-11-02
 * @Last modified by:   彭道宽
 * @Last modified time: 2018-11-02
 */import {
  SAVE_AUDIO_CONTEXT,
  REQUEST_MUSIC_LIST,
  RECEIVE_MUSIC_LIST,
  TIGGER_SAVE_MUSIC_ITEM,
  PAUSE_MUSIC
} from '../constants/music'

const INITIAL_STATE = {
  initAudioCtx: true,
  isFetchMusicList: false,
  musicList: [],
  tiggerMusicItem: {}
}

export default function weather (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_AUDIO_CONTEXT :
      return {
        ...state,
        initAudioCtx: false
      }
    case REQUEST_MUSIC_LIST :
      return {
        ...state,
        isFetchMusicList: true
      }
    case RECEIVE_MUSIC_LIST :
      return {
        ...state,
        musicList: [...action.data]
      }
    case TIGGER_SAVE_MUSIC_ITEM :
      let oldTiggerMusic = state.tiggerMusicItem
      return {
        ...state,
        tiggerMusicItem: {...oldTiggerMusic, ...action.data}
      }
    case PAUSE_MUSIC :
      let oldMusic = state.tiggerMusicItem
      return {
        ...state,
        tiggerMusicItem: {...oldMusic, playing: false}
      }
    default:
      return state
  }
}