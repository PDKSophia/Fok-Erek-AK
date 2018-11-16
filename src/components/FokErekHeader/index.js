import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import './index.scss'

class FokErekHeader extends Component {
  static propTypes = {
    fokErekHeaderObj: PropTypes.object // 头部内容
  }
  config = {
    navigationBarTitleText: '首页'
  }
    
  render () {
    return (
      <View>
        <View className='bg-box'>
          <View className='flex-h h-title'>{this.props.fokErekHeaderObj.title}</View>
          <View className='flex-h h-content'>{this.props.fokErekHeaderObj.content}</View>
          <View className='flex-h h-summary'>{this.props.fokErekHeaderObj.summary}</View>
        </View>
      </View>
    )
  }
}

export default FokErekHeader
