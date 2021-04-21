<template>
  <div class="lyric">
    <div class="box" ref="lyricBox">
      <p class="txt" v-for="(item, index) in showLyric" :key="index" :ref="`lyric${index}`"> {{ item[1] }} </p>
    </div>
  </div>
</template>

<script>
// 当前播放时间
// let timer = 0
// let lyricMoveTimer = null

export default {
  name: 'Lyric',
  data() {
    return  {
      // 歌词
      showLyric: [],
      // 当前播放的时间 精确到毫秒
      // allTime: '',
      oldIndex: -1,
      txt: ''
    }
  },

  props: {
    // 歌词
    lyric: {
      type: String,
      required: true
    },

    // 是否滚动
    sEndS: {
      type: Boolean,
      required: true
    },

    // 当前播放时间 秒
    nowTime: {
      type: Number,
      required: true
    },

    // 最大的播放时间
    maxTime: {
      type: Number,
      required: true
    }
  },

  computed: {
    // 播放最长时间
    onMaxTime() {return this.maxTime || 5}
  },

  watch: {
    // 歌词是否更新
    lyric(newVal) { 
      this.filterLyric(newVal)
    },
    // 歌词是否滚动
    sEndS(){
      this.lyricMove()
    },
    // 歌曲的进度
    // nowTime(newVal) {
    //   timer = newVal
    // },
    nowTime(newVal) {
      if (newVal <= 0) return 

      let millisecond = 0
      let str = newVal.toString()

      if (str.indexOf('.') > -1) {  
        let index = str.indexOf('.') + 4
        let result = str.substring(0,index);
        let strArr = result.split('.')
        millisecond = Number(strArr[0]) * 1000 + Number(strArr[1])

      } else {
        millisecond = newVal * 1000
      }
      // console.log(millisecond);
      this.getIndex(millisecond)
    }

  },

  methods: {
    // 取出歌词 fn
    filterLyric(lyric) {
      // 判断歌词是不是 暂无歌词
      if (lyric === '暂无歌词') {
        this.showLyric.push('暂无歌词')
        return
      }

      // 歌词在换行符进行分割成数组
      const data = lyric.split('\n')
      const dataMap = new Map()
      // 对分割好的歌词进行遍历 取出 时间转成毫秒
      data.forEach(item => {
        // 将里面的时间和歌词再进行分割
        const strArr = item.split(']')
        strArr[0] = strArr[0].substring(1, strArr[0].length)
        let timeArr1 = strArr[0].split(':')
        let timeArr2 = []
        if (timeArr1[1]) {
          timeArr2 = timeArr1[1].split('.')
        }
        let num = Number(timeArr1[0]) * 60 * 1000 + Number(timeArr2[0]) * 1000+ Number(timeArr2[1])
        if (num) {
          strArr[0] = num
        }
        // let yy = timeArr1[0]
        // console.log(yy);
        // 判断是否存在歌词，有则将他做成map数据 时间为key 歌词为 value
        dataMap.set(`${strArr[0]}`, strArr[1])
        // strArr.length > 1 && dataMap.set(`${strArr[0]}]`, strArr[1])

      })

      // 对分割好的 dataMap 遍历 转成数组
      this.showLyric = Array.from(dataMap)
      
      // console.log(Array.from(dataMap)[0]);
      // console.log(dataMap.get('[00:00.00]'));
    },

    // 找出时间对应的歌词
    getIndex(num) {
      let index = this.showLyric.findIndex((item, index) => {
        if (this.showLyric[index+1]) {
          return num <= this.showLyric[index+1][0]
        } 
        
      })

      if (index <= -1) {
        index = this.showLyric.length-2
      }
      // console.log(index);
      this.lyricMove(index)
    },

    // 进行歌词移动
    lyricMove(index) {
      if (!index) return

      // console.log(index);
      // console.log(this.oldIndex);
      if (index === this.oldIndex) {
        this.txt.style.color = 'red'
        
      } else {

        if (!this.txt) {
          this.txt = this.$refs[`lyric${index}`][0]
          return
        }
        this.txt.style.color = '#fff'
        this.txt = this.$refs[`lyric${index}`][0]
        this.oldIndex = index
      }
      
      let top = this.txt.offsetTop - 222
      const scrollDom = this.$refs.lyricBox
      scrollDom.style.transform = `translateY(-${top}px)`

      // console.log(this.$refs[`lyric${index}`][0].offsetTop);
      // const scrollDom = this.$refs.lyricBox
      // const allHeight = scrollDom.offsetHeight-444
      // scrollDom.style.transform = `translateY(-${this.seed}px)`

      // true 滚动
      // if (this.sEndS) {
      //   lyricMoveTimer = setInterval(() => {
      //     // timer ++
      //     console.log(timer);

      //     if (timer >=1000) {
      //       clearInterval(lyricMoveTimer)
      //       timer = 0
      //     }

      //   },1)
      
      // } else {
      //   // false 不滚动
      //   clearInterval(lyricMoveTimer)
      // }
      
    },

  },

  mounted() {
    // 进行歌词过滤
    this.filterLyric(this.lyric)
  }

}
</script>

<style lang="scss" scoped>
.lyric {
  width: 335px;
  height: 480px;
  overflow: hidden;
  .box {
    width: 350px;
    overflow-y: scroll;
    padding: 222px 0px;
    box-sizing: border-box;
    transform: translateY(0px);
    p {
      width: 335px;
      line-height: 26px;
      text-align: center;
      color: #fff;
      margin: 10px 0px;
      font-size: 16px;
    }
  }
}

</style>