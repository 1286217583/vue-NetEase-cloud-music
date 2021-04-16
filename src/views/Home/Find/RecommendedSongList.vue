<template>
  <!-- 推荐歌单组件 -->
  <div class="eecommendedSongList">
    <div class="top">
      <h2>推荐歌单</h2>
      <span>更多></span>
    </div>

    <div class="bottom">
      
      <div class="box">

        <section class="each" v-for="item in RecommendedSongList" :key='item.id'>
          <img id="image" v-lazy="item.picUrl">
          <p>{{ item.copywriter }}</p>
          <span>{{ rounding(item.playCount) }}</span>
        </section>

      </div>

    </div>
    
  </div>
</template>

<script>
import { getRecommendedSongList } from '@/api/home'

export default {
  name: 'RecommendedSongList',

  data () {
    return {
      RecommendedSongList: []
    }
  },

  methods: {
    // 获取 推荐歌单 fn
    getRecommendedSongList () {
      getRecommendedSongList().then(res => {
        if (res.code === 200) {
          this.RecommendedSongList = res.result
        }
      })
    },

    // 对歌单的播放数的处理函数
    rounding (value) {
      // 将 value 转换成字符串
      value = value.toString()

      // 判断 value.length 是否 大于或等于 5
      if (value.length >= 5) {
        // 大于或等于5 代表是 1w 以上 将 value 去掉后面的4位数 并 return
        value = value.substring(0, value.length-4)
        return value + '万'
      }

      // 不大于或等于 5 则直接 return
      return value
    }
  },

  created () {
    // 执行 获取歌单 fn
    this.getRecommendedSongList()
  }
}
</script>

<style lang="scss" scoped>
.eecommendedSongList { 
  background: #fff;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 1px;
    background: #000;
    transform: scaleY(.5);
  }
  height: 242px;
  .top {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    h2 {
      font-size: 20px;
      font-weight: 800;
    }
    span {
      width: 50px;
      height: 24px;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      border-radius: 20px;
      border: 1px solid #E6E6E6;
      color: #454545;
    }
  }
  .bottom {
    height: 198px;
    overflow: hidden;
    .box {
      height: 210px;
      overflow-x: scroll;
      display: flex;
      .each {
        width: 140px;
        height: 188px;
        padding: 0px 10px;
        position: relative;
        #image {
          width: 140px;
          height:140px;
          margin-bottom: 5px;
          border-radius: 10px;
        }
        p {
          font-size: 16px;
          color: #585858;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        span {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 14px;
          background: #545657;
          border-radius: 10px;
          padding: 4px;
        }
      }
    }
  }
}
</style>