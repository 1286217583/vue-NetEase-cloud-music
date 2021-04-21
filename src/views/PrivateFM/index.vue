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
      :sEndS="sEndS"
      :nowTime="currentTime"
      :maxTime="duration"
      ></Lyric>

      <footer>
        <div style="width: 100%;">
          <span class="left">{{ moveTime }}</span>
          
          <!-- 歌曲进度条 -->
          <van-slider 
          class="slider"
          style="margin:0px 50px;box-sizing: border-box;width: auto"
          @change="onChange"
          :button-size="20"
          :disabled="false"
          v-model="nowTmer"
          :max="duration"
          @input="goTime"
          >
          </van-slider>

          <span class="right">{{ showTime }}</span>
        </div>

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
import Vue from 'vue'
// 引入歌词组件
import Lyric from './Lyric'
// 滑块组件
import { Slider } from 'vant'
Vue.use(Slider);
// 计时器
// let sliderTimer = ''

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
      // 歌词对应时间
      songTime: [],
      // 控制歌词的滚动
      lyricMove: this.sEndS,
      // 歌曲总时间
      showTime: '',
      // 歌曲显示的播放时间
      moveTime: '00:00',
      // 传给歌词组件的进度
      fTimer: 0,
      // 当前歌曲进度条位置
      nowTmer: 0
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
    },

    // 歌词
    musicLyric: {
      type: String,
      required: true
    },

    // 播放进度时间 毫秒
    currentTime: {
      type: Number,
      required: true
    },

    // 时间 单位秒
    duration: {
      type: Number,
      required: true
    }
  },

  watch: {
    duration(newVal) {
      this.propsTime(newVal)
    },

    // sEndS() {
    //   this.sliderMove()
    // },
    
    currentTime(newVla, oldVal) {
      newVla = Math.ceil(newVla)
      oldVal = Math.ceil(oldVal)
      if ( newVla !== oldVal ) {
        this.goTime(newVla)
      }
      this.nowTmer = newVla
    }
    
  },

  components: {
    Lyric
  },

  methods: {
    // 对暂停或者播放按钮的点击 和通知 父组件
    FMshow() {
      this.$emit('playendstop', !this.$props.sEndS)
      this.lyricMove = !this.lyricMove
    },

    // 对自身的隐藏
    showfm () {
      this.$emit('showfm')
    },

    // 拖动进度条滑块的处理 fn
    onChange(value) {
      // 执行 goTime fn
      this.goTime(value)
      this.$emit('audiocurrent', value)
    },
    
    // 处理props的时间
    propsTime(time) {
      let ss = time % 60
      if (ss.toString().length !== 2) {
        ss = `0${ss}`
      }
      
      let mm = (time - ss) / 60
      if (mm.toString().length !== 2) {
        mm = `0${mm}`
      }

      this.showTime = `${mm}:${ss}`
    },

    // 对播放时间进行处理
    goTime(value) {
      clearInterval(this.oneTimer)
      // 判断 value 是否小于10
      if (value < 10) {
        // 小于直接赋值 然后 return
        this.moveTime = `00:0${value}`
        return
      }

      // 判断 value是否大于 60  大于60再进行判断和计算处理 否则直接赋值
      if (value >= 60) {
        // 对 value 进行取余 获取到秒数
        let ss = value % 60

        // 对 取余的数进行判断是否为单数 单数加 0 
        if (ss.toString().length !== 2) {
          ss = `0${ss}`
        }

        // 对 value 减去秒数 再除 60 得 分数
        let mm = (value - ss) / 60

        // 判断得除的分数 是否为单数 单数加 0
        if (mm.toString().length !== 2) {
          mm = `0${mm}`
        }

        // 最后赋值 给 moveTime 数据
        this.moveTime = `${mm}:${ss}`

      } else {
        // 为 false 说明大于 10 小于 60 直接赋值
        this.moveTime = `00:${value}`
      }

      this.oneTimer = setTimeout(() => {
        this.fTimer = this.nowTmer
      },500)
    },

    // 播放时的进度条移动
    // sliderMove() {
    //   if (this.sEndS) {

    //     sliderTimer = setInterval(() => {
    //       this.nowTmer ++
    //       this.goTime(this.nowTmer)
    //       if (this.nowTmer >= this.duration) {
    //         clearInterval(sliderTimer)
    //         this.nowTmer = 0
    //       }
    //     },1000)

    //   } else {
    //     clearInterval(sliderTimer)
    //   }
    // }
  },

  mounted() {
    // this.sliderMove()
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    span {
      font-size: 14px;
      color: #fff;
    }
    img {
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
}


</style>