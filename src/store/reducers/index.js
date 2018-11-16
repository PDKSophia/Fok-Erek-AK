import { combineReducers } from 'redux'
import weather from './weather'
import movie from './movie'
import music from './music'
import global from './global'

export default combineReducers({
  weather,
  movie,
  music,
  global
})
