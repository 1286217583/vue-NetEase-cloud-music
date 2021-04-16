// 关于首页的数据请求
// 返回一个接口调用之后，axios返回的一个 promise 对象

// 引入 axios
import request from '@/util/request'

/**
 * 获取轮播图数据
 * @param { Number } type 轮播图类型 
 */ 
export const getBanner = () => {
  return request({
    url: '/api/banner',
    method: 'GET',
    params: {
      type: 1
    }
  })
}

/**
 * 获取 推荐歌单数据
 * @param { Number } limit 返回的数量
 */
export const getRecommendedSongList = () => {
  return request({
    url: '/api/personalized',
    method: 'GET',
    params: {
      limit: 6
    }
  })
}

/**
 * 获取 私人定制 欧美 音乐
 * @param {Number} type 返回的地区 
 */
 export const getCustomized = () => {
  return request({
    url: 'api/artist/list',
    method: 'GET',
    params: {
      area: 96,
      limit: 9
    }
  })
}

/**
 * 获取 音乐视频
 * @param {Number} type 返回的地区 
 */
 export const getMusicVideo = () => {
  return request({
    url: '/api/video/category/list',
    method: 'GET',
  })
}
