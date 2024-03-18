import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon) // 全局注册组件

// 下面三行代码的任务是 把 同级目录的 svg目录下的.svg图片引入到项目中来
// require.contex(目标目录, 是否扫描子目录, 正则表达式)：扫描目录中的文件，返回一个函数
const req = require.context('./svg', false, /\.svg$/) // 以.svg为结尾的文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req) // 这里实际上是req.keys()，获取了一个数组，然后用数组方法map()遍历每一项
// map()遍历每一项，每一项是一个svg图片，map()内部是一个回调函数，而req恰好是一个回调函数
// 返回的req函数能够引用svg图片到项目中，假如有100张svg，这里就引用100次
// 最终这三行代码的目的是：将所有的svg图片都引入到项目中
// 从哪看：浏览器F12 → 元素(element) → <body>中第一个标签<svg> → 内部有很多<symbol> → id属性值一看就懂

// 相当于把svg下的所有的svg图片打包到了项目中
// 如果想用svg图片 就在svg目录下去寻找就可以了
