import Taro from '@tarojs/taro'
import City from '../api/city'

const tool = {
  namespace: 'tool',
  
  searchCityName: (citytext) => {
    let res = {}
    City.TotalCity.cities.map((item) => {
      if(item.city === citytext) {
        res = Object.assign({}, item)
      } 
    })
    return res
  },
  showLoading: (_title) => {
    Taro.showLoading({
      title: _title
    })
  },
  hideLoading: () => {
    Taro.hideLoading()
  },
  showToast: (_title, _icon, _duration) => {
    Taro.showToast({
      title: _title,
      icon: _icon,
      duration: _duration
    })
  }
}

export default tool