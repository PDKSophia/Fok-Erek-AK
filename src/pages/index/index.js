import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import PropTypes from 'prop-types'
import FokErekHeader from '../../components/FokErekHeader'
import AudioContext from '../../components/AudioMusic'
import Entrance from '../../components/Entrance'
import { savePhoneSystem } from '../../store/actions/global'
import './index.scss'

import HomeArrow from '../../assets/home_arrow.png'
import MovieIcon from '../../assets/movie.png'
import MovieArrow from '../../assets/movie_arrow.png'
import MusicIcon from '../../assets/music.png'
import MusicArrow from '../../assets/music_arrow.png'
import WeatherIcon from '../../assets/weather.png'

class Index extends Component {
  static propTypes = {
    isFetchSystemPhone: PropTypes.bool, // 是否需要获取用户手机设备信息
    saveUserPhoneSystem: PropTypes.func // 保存用户的手机设备信息
  }
  static defaultProps = {
    isFetchSystemPhone: true
  }
  state = {
    fokErekHeaderObj: {
      title: 'Fok-Erek-AK',
      content: '一款可爱、简单、快速上手的多功能应用',
      summary: '我不懂这个世界，但我想懂你'
    },
    fokErekEntry: [
      {
        icon: MusicIcon,
        title: 'FOK Music',
        arrow: MusicArrow,
        type: 'music'
      },
      {
        icon: MovieIcon,
        title: 'FOK Movie',
        arrow: MovieArrow,
        type: 'movie'
      },
      {
        icon: WeatherIcon,
        title: 'FOK Weather',
        arrow: HomeArrow,
        type: 'weather'
      },
    ]
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillUnmount () { }

  componentDidShow () {
    if (this.props.isFetchSystemPhone) {
      console.log('获取设备信息')
      let _this = this
      Taro.getSystemInfo({
        success: function(res) {
          _this.props.saveUserPhoneSystem(res)
        }
      })
    }
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <FokErekHeader fokErekHeaderObj={this.state.fokErekHeaderObj} />
          <View className='taro-app-title'>专区选择</View>
        <Entrance fokErekEntry={this.state.fokErekEntry} />
        <AudioContext />
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  let isFetchSystemPhone = state.global.isFetchSystemPhone
  return {
    isFetchSystemPhone
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserPhoneSystem: (phoneSystem) => {
      dispatch(savePhoneSystem(phoneSystem))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)