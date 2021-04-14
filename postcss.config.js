module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要去设置这个选项，它会自动去使用 .browserslistrc 这个文件的配置
      // browsers: ['Android >= 4.0', 'ios >= 8'],
    },
    'postcss-pxtorem': {
      // 转换的基准值 1rem = 37.5px
      // xrem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
// module.exports = {
// 	plugins: {
//     	'autoprefixer': {
//       		browsers: ['Android >= 4.0', 'iOS >= 7']
//     	},
//     	'postcss-pxtorem': {
//       		rootValue: 32,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
//       		propList: ['*'], //属性的选择器，*表示通用
//       		selectorBlackList:[]    //忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
//     	}
//   }
// }