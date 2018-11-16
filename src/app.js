import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/weather/index',
      'pages/movie/index',
      'pages/music/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#32715a',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle : '#ffffff'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index></Index>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
