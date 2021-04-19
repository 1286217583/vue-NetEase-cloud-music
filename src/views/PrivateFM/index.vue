<template>
  <transition class="animated" 
    enter-active-class="fadeInUpBig" 
    leave-active-class="fadeOutDownBig">
    <div id="dowebok">
      <div class="top">
        <span @click="showfm"></span>
        <p class="title">{{ title }}</p>
        <p class="name">{{ singer }}</p>
      </div>

      <!-- 歌词组件 -->
      <Lyric 
      :lyric="musicLyric"
      ></Lyric>

      <footer>
        <img 
        src="@/assets/icon/music-play-icon.png" 
        alt="" 
        v-show="!sEndS" 
        @click="FMshow">

        <img src="@/assets/icon/music-stop-icon.png" 
        alt="" 
        v-show="sEndS"
        @click="FMshow">
      </footer>
    </div>
  </transition>

</template>

<script>
// 引入歌词组件
import Lyric from './Lyric'

export default {
  name: 'PrivateFM',
  
  data() {
    return {
      // 歌名
      title: this.$props.Exhibition.title,
      // 歌手
      singer: this.$props.Exhibition.artist,
      // 歌词
      lyric: [],
      // 歌曲时间
      songTime: [],

    }
  },

  props: {
    // 父组件需要传过来的id、title、singer
    Exhibition: {
      type: Object,
    },

    // 父组件点击暂停或者播放  默认暂停
    sEndS: {
      type: Boolean,
      default: false
    },

    musicLyric: {
      type: String,
      required: true
    }
  },

  components: {
    Lyric
  },
  methods: {
    // 获取歌词数据
    // getLyricData() {
    //   // 发送请求
    //   getLyric(this.ID).then(res => {
    //     console.log(res);
    //     // 判断数据中是否有歌词
    //     if (res.lrc) {
    //       // 有歌词就进行 下一步操作
    //       this.getLyric(res.lrc.lyric)
    //     } else {
    //       this.lyric = ['暂无歌词']
    //     }
    //   }) 
    // },

    // // 取出歌词数据里面的歌词
    // getLyric(lyricData) {
    //   // 对数据返回的歌词 在换行符进行分割成数组
    //   const data = lyricData.split('\n')
    //   const dataMap = new Map()

    //   // 对分割好的歌词进行遍历
    //   data.forEach(item => {
    //     // 将里面的时间和歌词再进行分割
    //     const strArr = item.split(']')
    //     // 判断是否存在歌词，有则将他做成map数据 时间为key 歌词为 value
    //     strArr.length > 1 && dataMap.set(`${strArr[0]}]`, strArr[1])
    //   })
    //   // console.log(dataMap);
    // }

    // 对暂停或者播放按钮的点击 和通知 父组件
    FMshow() {
      this.$emit('playendstop', !this.$props.sEndS)
    },
    // 对自身的隐藏
    showfm () {
      this.$emit('showfm')
    }
  },

  created () {
    // this.getLyricData()

    // // 获取歌曲 url
    // getMusicUrl(this.ID).then(res => {
    //   console.log(res);
    // })
  }
}
</script>

<style lang='scss' scoped>
#dowebok {
  animation-duration:.5s;
  position: absolute;
  top: -537px;
  width: 100%;
  height: 617px;
  background-image: url('../../assets/musicPlay-background1.jpg');
  padding: 20px;
  .top {
    height: 50px;
    span {
      float: left;
      width: 20px;
      height: 20px;
      border-left:4px solid #fff ;
      border-bottom:4px solid #fff ;
      transform: rotate(-45deg);
      
    }
    .title {
      height: 30px;
      font-size: 22px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      margin-right: 20px;
    }
    .name {
      height: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      color: #999;
    }
  }
  footer {
    width: 335px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
  }
}

</style>