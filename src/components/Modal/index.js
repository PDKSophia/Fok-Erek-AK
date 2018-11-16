import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Input } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'

class Modal extends Component {
  static propTypes = {
    onHandleOnOK: PropTypes.func, //点击确定
    cCity: PropTypes.object, // 当前城市
    onHandleShowModal: PropTypes.func,
    modalContent: PropTypes.object // 关闭弹窗
  }

  state = {
    focus: true,
    value: ''
  }

  componentDidMount () {
    this.setState({
      value: this.props.cCity.city
    })
  }

  changeValue = (e) => {
    this.setState({
      value: e.detail.value
    })
  }
  handleOnSubmit = () => {
    this.props.onHandleOnOK(this.state.value)
  }

  // 绑定函数
  onHandleShowModal = () => {
    const { onHandleShowModal } = this.props
    onHandleShowModal()
  }
  
  handleOnCancel = () => {
    this.props.onHandleShowModal()
  }

  render () {
    return (
      <View className='mask'>
        <View class='toastbg'></View>
        <View className='modal-dialog'>
          <View className='modal-title'>{this.props.modalContent.title}</View>
          <View className='modal-input'>
            <Input value={this.state.value} focus={this.state.focus} placeholder-class='placeholder' onChange={this.changeValue} />
          </View>
          <View className='modal-button'>
            <View className={classnames(
              'main-button',
              'btn-cancel'
            )} onClick={this.handleOnCancel}
            > 取消
            </View>
            <View className={classnames(
              'main-button',
              'btn-submit'
            )} onClick={this.handleOnSubmit}
            > 确定
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Modal
