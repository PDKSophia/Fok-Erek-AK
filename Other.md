### 接口方面说明
```javascript
    也许你克隆项目之后，发现接口调用有问题，报错为 :

    'http://xxxx.com' 不在以下 request 合法域名列表中

    这时候需要你将微信开发者工具中的，左上角 -> 详情 -> (勾选) 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 
```

### 部分bug修复说明
```javascript
    1 、 父组件 给 子组件传递函数，使得子组件可调用触发父组件的函数，但在子组件中打印props无该函数
        
        在weather组件中调用modal组件，传递了onHandleShowModal(), 在modal组件中打印props无该函数

        // weather.js

        <Modal onHandleShowModal={this.handleShowModal} />

        // modal.js
        componentDidMount () {
            console.log(this.props)   // 无onHandleShowModal()
        }

        // 解决，添加下边代码，即可调用 onHandleShowModal() 函数，个人认为是版本问题
        onHandleShowModal = () => {
            const { onHandleShowModal } = this.props
            onHandleShowModal()
        }

    2 、 在lib/tool.js中我定义了一个函数，用于查询城市的名字和cityId，但是在执行这个函数的时候，一直报错。
        
        thirdScriptError(0 , _tool.searchCityName) is not a function;

        我尝试过几种写法，比如
        // 写法一， 报错
        export const searchCityName = () => {
            console.log('click')
        }

        // 写法二， 正确，但是只能export 该函数，写多个报错
        export default function searchCityName () {
            console.log('click')
        }

        // 写法三， 报错
        function searchCityName () {
            console.log('click')
        }

        module.exports = {
            searchCityName
        }

        // 最后我换成了这样
        const tool = {
            searchCityName: () => {
                console.log('click')
            }
        }
        export default tool

```