<template>
  <div style="position: relative" @click="go">
    <!-- 音乐播放器 -->
    <div class="Aplayer">
      <Aplayer
      v-if="goAudio"
      :music="config"
      :showLrc="true"
      ref="audio"
      @pause="startEndStop"
      @play="startEndStop"
      >
      </Aplayer>
    </div>

    <PrivateFM
    v-show="show" 
    @showfm="show = false" 
    @playendstop="pends" 
    :Exhibition="songInformation"
    :sEndS='sEndS'
    :musicLyric="musicLyric"
    />
  </div>
</template>

<script>
// 请求接口
import { getLyric, getMusicUrl } from '@/api/home'
// Aplayer 组件
import Aplayer from 'vue-aplayer'
Aplayer.disableVersionBadge = true
// PrivateFM 组件
import PrivateFM from "../PrivateFM"

export default {
  name: 'play',

  data () {
    return {
      show: false,
      // show: true,
      // 歌曲信息
      songInformation: {},
      // 歌曲详情 播放或暂停
      sEndS: false,
      // 控制播放器的显示或隐藏
      goAudio: false,

      // 歌词
      musicLyric: ''
    }
  },

  computed: {
    // Aplayer 组件的 配置项
    config() {
      return {
        // 歌名
        title:this.songInformation.title,
        // 歌手
        artist: this.songInformation.singer,
        // 歌曲地址
        src:'',
        // src: 'http://m7.music.126.net/20210419181744/2c3d52e41a9705cf1f1be6347f9c3778/ymusic/a128/1bde/cd7b/99f700e0a7d1cb6e793b8f7b64d82f52.mp3',
        // 歌词
        lrc:''
      }
    }
  },

  props: {
    // 父组件传送过来是否显示歌曲详情的
    play: {
      type: Boolean,
      default: false
    },
    // 传递过来的歌曲信息
    propsSongInformation: {
      type: Object
    }
  },

  components: {
    Aplayer,
    PrivateFM
  },

  methods: {
    playEstop () {
      const audio = this.$refs.audio.$refs.audio
      if (this.play) {
        audio.play()
      }
    },
    // 展示 歌曲嫌弃 fn
    go(ev) {
      const className = ev.target.className
      if (className === 'aplayer-music' || className === 'aplayer-lrc-current' ) {
        this.show = true
      }
    },
    // 子组件控制歌曲播放暂停函数
    pends (pes) {
      // 获取到 Aplayer 这个组件的实列里面的 $resf 中的 audio
      const audio = this.$refs.audio.$refs.audio
      // 如果子组件传递过来的是 true 则表示需要进行播放 false 则暂停
      if (pes) {
        // 播放
        audio.play()
      } else {
        // 暂停
        audio.pause()
      }
    },

    // 子组件的 播放器暂停或者开始执行的函数
    startEndStop() {
      this.sEndS = !this.sEndS
    },

    // 判断props中的propsSongInformation是否存在id
    getSongInformation() {
      const id = this.$props.propsSongInformation.id
      // 没有就给默认值，有就取出
      if (id) {
        this.songInformation = this.$props.propsSongInformation
        // 获取歌词 songInformation
        this.getLyric(id)
        // 获取url 
        this.getMusicUrl(id)
      } else {
        // 没有就默认值
        this.songInformation = {
          id: '1330348068',
          title: '起风了',
          artist: '买辣椒也要券',
        }
        // 赋值给 config
        this.config.src = 'http://m7.music.126.net/20210419114713/97c4a617d681d6acfc40aac1c43f876c/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3',
        this.config.lrc = '[00:00.00]lrc here\n[00:01.00]aplayer'

        this.musicLyric = 'Hello World'

        // 显示 播放器
        this.goAudio = true
      }
    },

  // 1486901878
  // 1330348068
    // 请求歌词
    getLyric(id) {
      getLyric(id) .then(res => {
        // 判断是否有歌词
        const lyric = res.lrc ? res.lrc.lyric : '暂无歌词'
        
        // 拿到歌词 赋值 给 config.lrc
        this.config.lrc = lyric
        this.musicLyric = lyric
      })
    },
    
    // 请求歌曲播放地址
    async getMusicUrl(id) {
      await getMusicUrl(id).then(res => {
        // 拿到歌曲url 赋值 给 config.src
        this.config.src = res.data[0].url
        // 让播放器显示
        this.goAudio = true
      })
      // play是true则会组件播放
      if (this.play) {
        this.$refs.audio.$refs.audio.play()
        this.sEndS = true
      }
    }
  },

  created () {
    // 执行 methods 中的 getSongInformation fn
    this.getSongInformation()
  },
}
</script>
// const data = lyricData.split('\n')
      // const dataMap = new Map()
      console.log(res);
      this.lyric = res.lrc.lyric
      // data.forEach(item => {
      //   const strArr = item.split(']')
      //   strArr.length > 1 && dataMap.set(`${strArr[0]}]`, strArr[1])
      // })

      // console.log(dataMap);

<style lang='scss' scoped>
.Aplayer {
  width: 100%;
  position: absolute; 
  top: -100px;
  left: 0px;
}
</style>