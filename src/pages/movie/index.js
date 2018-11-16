import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'
import { connect } from '@tarojs/redux'
import { fetchEyesMovieCateList } from '../../store/actions/movie'
import './index.scss'
import HomeIcon from '../../assets/home.png'
import HotIcon from '../../assets/hots.png'
import CateIcon from '../../assets/cates.png'
import AuthorIcon from '../../assets/author.png'

class Movie extends Component {
  static propTypes = {
    isFetchMovieCate: PropTypes.bool, // 是否请求获取视频分类
    catelist: PropTypes.array, // 视频分类数组
    getEyeMovieCate: PropTypes.func // 请求获取开眼视频分类
  }
  static defaultProps = {
      
  }
  state = {
    currentTab: 0, // tab的切换
    scrollY: true
  }

  config = {
    navigationBarTitleText: '视频'
  }

  componentDidMount () {
    this.props.onGetEyeMovieCate()
    if (this.props.isFetchMovieCate) {
      for(let i = 0; i < this.props.catelist.length; i++) {
        if(this.props.catelist[i].id == -1){
          this.props.catelist[i].iconUrl = HomeIcon
        } else if(this.props.catelist[i].id == 0) {
          this.props.catelist[i].iconUrl = HotIcon
        } else if(this.props.catelist[i].id == 1) {
          this.props.catelist[i].iconUrl = CateIcon
        } else {
          this.props.catelist[i].iconUrl = AuthorIcon
        }
      }
      console.log(this.props.catelist)
    }
  }
  
  handleSwitchTab = (e) => {
    let that = this
    if (that.state.currentTab == e.target.dataset.current) {
      return false
    } else {
      that.setState({
        currentTab: e.target.dataset.current
      })
    }
  }

  handleCurrentswiper = (e) => {
    this.setState({
      currentTab: e.detail.current
    })
  }

  render () {
    return (
      <View className='movie'>
        {/* <View className='v_title'>专区选择</View> */}
        <View className='tab'>
          <View className={['tab-list', this.state.currentTab==0 && "active"].join(' ')} data-current='0' onClick={this.handleSwitchTab}>首页</View>
          <View className={['tab-list', this.state.currentTab==1 && "active"].join(' ')} data-current='1' onClick={this.handleSwitchTab}>热门</View>
          <View className={['tab-list', this.state.currentTab==2 && "active"].join(' ')} data-current='2' onClick={this.handleSwitchTab}>分类</View>
          <View className={['tab-list', this.state.currentTab==3 && "active"].join(' ')} data-current='3' onClick={this.handleSwitchTab}>作者</View>
        </View>
        <Swiper
          current={this.state.currentTab}
          className='swiper-box'
          duration='300'
          // style={{ clientHeight: `${this.props.phoneSystem.windowHeight}px`, height: `${swiperHeight}px` }}
          onChange={this.handleCurrentswiper}
        >
          <SwiperItem className='swiper-content'>
            <ScrollView scrollY={this.state.scrollY} >
              <View className='movieNowOn'>
                首页视频数据
              </View>
            </ScrollView>
          </SwiperItem>
          <SwiperItem className='swiper-content'>
            <ScrollView scrollY={this.state.scrollY} >
              <View className='movie-future-on'>
                热门视频数据
              </View>
            </ScrollView>
          </SwiperItem>
          <SwiperItem className='swiper-content'>
            <ScrollView scrollY={this.state.scrollY} >
              <View className='movie-future-on'>
                分类视频数据
              </View>
            </ScrollView>
          </SwiperItem>
          <SwiperItem className='swiper-content'>
            <ScrollView scrollY={this.state.scrollY} >
              <View className='movie-future-on'>
                作者视频数据
              </View>
            </ScrollView>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let isFetchMovieCate = state.movie.isFetchMovieCate
  let catelist = state.movie.catelist
  return {
    isFetchMovieCate,
    catelist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEyeMovieCate: () => {
      dispatch(fetchEyesMovieCateList())
    }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie)
  