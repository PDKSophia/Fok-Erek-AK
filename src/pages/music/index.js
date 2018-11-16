import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux'
import classnames from 'classnames'
import { fetchYunMusicList, fetchTiggerSaveMusicItem, pauseMusicPlay } from '../../store/actions/music'
import './index.scss'

// const musicAlbumID = ['2341435171', '2239286898', '2342244887', '2237551001', '2141039987']
class Music extends Component {
  static propTypes = {
    isFetchMusicList: PropTypes.bool, // 是否请求数据
    musicList: PropTypes.array, // 音乐数组数据
    tiggerMusicItem: PropTypes.object, // 当前播放的歌曲
    onSaveMusicItem: PropTypes.func, // 保存当前的播放歌曲
    onPauseMusicPlay: PropTypes.func, // 暂停歌曲播放
    onGetYunMusicList: PropTypes.func // 请求获取数据
  }

  static defaultProps = {
    musicList: [],
    loading: false
  }

  state = {
    loading: false,
  }

  config = {
    navigationBarTitleText: '音乐',
    navigationBarBackgroundColor: '#32715a'
  }

  componentDidMount () {
    if (!this.props.isFetchMusicList) {
      Taro.showLoading({
        title: '加载中'
      })
      this.setState({
        loading: true
      })
      // this.props.onGetYunMusicList('2342244887')
      this.props.onGetYunMusicList('2239286898')
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.isFetchMusicList && nextProps.musicList.length !== 0 && this.state.loading) {
      Taro.hideLoading()
      Taro.showToast({
        title: '获取歌曲成功',
        icon: 'success',
        duration: 1500
      })
      setTimeout(() => {
        Taro.hideToast()
      }, 2500)
    }
  }

  // 播放歌曲
  handlePlayMusic = (mp3_id, index) => {
    let jsondata = {
      id: mp3_id,
      index: index,
      mp3Url: `http://music.163.com/song/media/outer/url?id=${mp3_id}.mp3`,
      playing: true
    }
    if (jsondata.mp3Url == this.props.tiggerMusicItem.mp3Url) {
      // 同首歌，不需要dispatch
      this.props.onSaveMusicItem({ playing: true })
    } else {
      this.props.onSaveMusicItem(jsondata)
    }
  }
  // 暂停
  handlePauseMusic = () => {
    this.props.onPauseMusicPlay()
  }
  render () {
    return (
      <View>
        {this.props.musicList.map((item, index) => {
          return <View className='fok-erek-music-container' key={index}>
            <View className='fok-erek-music-lable'>- 音乐 -</View>
            <View className='fok-erek-music-meta-header'>
              <View className='fok-erek-music-meta-title'>{ item.song_name }</View>
              <View className='fok-erek-music-meta-author'>{ item.singer }</View>
            </View>
            <View className='for-erek-music-meta-playbox'>
              <View className='for-erek-music-bgimage-box'>
                <View className='for-erek-music-cover-image'>
                   <Image src={item.pic} 
                     alt=''
                     className={[index === this.props.tiggerMusicItem.index && this.props.tiggerMusicItem.playing && 'fok-erek-rotates'].join('')}
                     data-unique={index}
                   ></Image>
                </View>
                <View className='for-erek-music-fixed-icon' data-play={index}>
                  <Image alt=''
                    src='http://image.wufazhuce.com/music-detail-play.png'
                    onClick={this.handlePlayMusic.bind(this, item.id, index)}
                    className={classnames(
                      'fok-play-icon',
                      { fok_erek_icon_hidden : this.props.tiggerMusicItem.playing && index === this.props.tiggerMusicItem.index }
                    )}
                  />
                  <Image alt=''
                    src='http://image.wufazhuce.com/music-detail-pause.png'
                    onClick={this.handlePauseMusic}
                    className={classnames(
                      'fok-pause-icon',
                      { fok_erek_icon_show : this.props.tiggerMusicItem.playing && index === this.props.tiggerMusicItem.index }
                    )}
                  />
                </View>
              </View>
            </View>
            <View className='for-erek-music-meta-content'>
              <View className='fok-erek-music-forward-text'>上路去，别挂念这里</View>
              <View className='fok-erek-music-today-text'>2018/11/02</View>
            </View>
          </View>
        })}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let { isFetchMusicList, musicList, tiggerMusicItem, initAudioCtx } = state.music
  return {
    isFetchMusicList,
    musicList,
    tiggerMusicItem,
    initAudioCtx
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetYunMusicList: (al_id) => {
      dispatch(fetchYunMusicList(al_id))
    },
    onSaveMusicItem: (jsondata) => {
      dispatch(fetchTiggerSaveMusicItem(jsondata))
    },
    onPauseMusicPlay: () => {
      dispatch(pauseMusicPlay())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music)