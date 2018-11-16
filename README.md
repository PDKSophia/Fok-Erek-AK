## Fok-Erek-AK

![](https://img.shields.io/badge/React-16.4.8-brightgreen.svg)
![](https://img.shields.io/badge/license-MIT-green.svg)
![](https://img.shields.io/badge/Taro-1.1.0-red.svg)
![](https://img.shields.io/badge/classnames-2.2.6-blue.svg)
![](https://img.shields.io/badge/Author-PDK-yellow.svg)

### v1.0.0 版本说明
#### 技术栈
- react
- redux
- taro
- prop-types
- classnames
- sass
- ...

#### 目标功能
- [ ] 天气查询
- [ ] 音乐播放、封面旋转
- [ ] 视频播放
- [ ] ...

#### 部分界面

<img src='./image/fok-1.png' width=240 height=520>

<img src='./image/fok-3.png' width=240 height=520>

<img src='./image/fok-4.png' width=240 height=520>

### 文件架构
```
·
├── package.json
│ 
├── dist                           打包的数据  
│ 
├── src
│   ├── assets                      图片等资源文件
│   │                    
│   ├── components                  
│   │    ├─AudioMusic               Audio播放组件  
│   │    ├─Entrance                 首页入口组件    
│   │    ├─FokErekHeader            首页标题显示组件   
│   │    ├─Modal                    对话弹窗组件                  
│   │    └─ ... 
│   │
│   ├── lib                    
│   │    ├─tool.js                  全局函数文件，比如 加载框，提示框等
│   │    └─ ... 
│   │             
│   ├── page
│   │    ├─index                    小程序首页                      
│   │    ├─movie                    视频主页
│   │    ├─music                    音乐主页     
│   │    ├─weather                  天气主页             
│   │    └─ ...                
│   │
│   ├── service                    与服务器相关文件
│   │    ├─city                      
│   │    ├─index             
│   │    └─ ...  
│   │
│   ├── store                       Redux状态机    
│   │    ├─actions                  
│   │    ├─constants                
│   │    ├─reducers            
│   │    ├─index.js                         
│   │    └─ ... 
│   │    
│   └─
│                   
└─
```

### 相关链接

博客 : http://blog.pengdaokuan.cn:4001
 
掘金 : https://juejin.im/user/594ca8a35188250d892f4139
 
Erek-Resume : https://github.com/PDKSophia/erek-resume

Erek-Editor: https://github.com/PDKSophia/erek-editror
 
Vue-erek-manage: https://github.com/PDKSophia/vue-erek-manage

图标制作地址: https://shields.io/#/

-----
 
版权所有Copyright © 2018 by PDK 
 
All rights reserved。
