import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux'
import './index.scss'
import { fetchCityWeather, receiveCurrentCity } from '../../store/actions/weather'
import Modal from '../../components/Modal/index'
import tool from '../../lib/tool'

class Weather extends Component {
  static propTypes = {
    cCity: PropTypes.object, // 当前搜索的城市
    receiveCurrentCity: PropTypes.func, // 保存当前搜索的城市
    onGetCityWeather: PropTypes.func, // 请求获取城市天气
    isFetchWeather: PropTypes.bool, // 是否请求数据
    cityWeather: PropTypes.object // 某天气天气
  }

  static defaultProps = {
    isFetchWeather: false,
    cityWeather: {
      city: '',
      weatherDetailsInfo: {
        weather3HoursDetailsInfos: [
          {
            lowerestTemperature: '0',
            highestTemperature: '0'
          }
        ]
      },
      weathers: []
    }
  }

  state = {
    showModal: false,
    modalContent: {
      title: '修改城市'
    }
  }

  config = {
    navigationBarTitleText: '天气',
    navigationBarBackgroundColor: '#32715a'
  }

  componentDidMount () {
    if (!this.props.isFetchWeather) {
      tool.showLoading('初始化天气')
      this.props.onGetCityWeather(this.props.cCity.cityid)
      setTimeout(() => {
        tool.hideLoading()
      }, 1000)
    }
  }

  handleShowModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  
  handleOnOK = (values) => {
    let searCity = tool.searchCityName(values)
    if (Object.keys(searCity).length !== 0) {
      this.props.onSaveSearchCityValue(searCity)
      this.handleShowModal()
      tool.showLoading('正在切换城市')
      this.props.onGetCityWeather(this.props.cCity.cityid)
      setTimeout(() => {
        tool.hideLoading()
      }, 1000)
    } else {
      tool.showToast('抱歉，暂找不到此城市', 'none', 1500)
    }
  }

  render () {
    return (
      <View>
        <View className='bg-weather'>
          <View className='cate'>{this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].weather}</View>
          <View className='city' onClick={this.handleShowModal}>{this.props.cityWeather.city}</View>
          {
            this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].lowerestTemperature === this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].highestTemperature ?
            <View className='num'>{this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].lowerestTemperature}°</View> : 
            <View className='num'>{this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].lowerestTemperature}° ~ {this.props.cityWeather.weatherDetailsInfo.weather3HoursDetailsInfos[0].highestTemperature}°</View>
          }
        </View>
        <View className='after-day-weather'>
          {this.props.cityWeather.weathers.map((wea, index) => {
            return <View className='weather-cell' key={index}>
              <View className='which-day'>{wea.week}</View>
              <View className='temperature'>{wea.temp_night_c}° ~ {wea.temp_day_c}°</View>
            </View>
          })}
        </View>
        {this.state.showModal&&<Modal cCity={this.props.cCity} modalContent={this.state.modalContent} onHandleShowModal={this.handleShowModal} onHandleOnOK={this.handleOnOK} />}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let cCity = state.weather.cCity
  let isFetchWeather = state.weather.isFetchWeather
  let cityWeather = state.weather.cityWeather
  return {
    cCity,
    isFetchWeather,
    cityWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCityWeather: (cityId) => {
      dispatch(fetchCityWeather(cityId))
    },
    onSaveSearchCityValue: (jsondata) => {
      dispatch(receiveCurrentCity(jsondata))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
