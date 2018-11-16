import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux'

class AudioMusic extends Component {
  static propTypes = {
    tiggerMusicItem: PropTypes.object, // 当前播放的歌曲
  }
  static defaultProps = {
      
  }
  state = {
  }

  config = {
    navigationBarTitleText: '视频'
  }

  componentDidMount () {
    this.props.audioContext = Taro.createInnerAudioContext()
    this.props.audioContext.obeyMuteSwitch = false
    this.props.audioContext.loop = true
    this.props.audioContext.src = this.props.tiggerMusicItem.mp3Url
    this.props.audioContext.play()
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
  }

  componentWillUpdate (nextProps) {
    console.log('##### before mp3Url: ', this.props.tiggerMusicItem.mp3Url)
    console.log('@@@@@ after mp3Url: ', nextProps.tiggerMusicItem.mp3Url)
    if (nextProps.tiggerMusicItem.playing) {
      if (this.props.tiggerMusicItem.mp3Url == undefined || this.props.tiggerMusicItem != nextProps.tiggerMusicItem.mp3Url) {
        nextProps.audioContext.src = nextProps.tiggerMusicItem.mp3Url
      }
      nextProps.audioContext.play()
    } else {
      nextProps.audioContext.pause()
    }
  }

  componentDidShow () { }
  
  componentDidHide () { }
  
  render () {
    return (
      <View className='fok-audio-play'>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let tiggerMusicItem = state.music.tiggerMusicItem
  return {
    tiggerMusicItem
  }
}

  
export default connect(mapStateToProps)(AudioMusic)
  