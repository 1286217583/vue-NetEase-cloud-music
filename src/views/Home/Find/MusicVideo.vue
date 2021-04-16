<template>
  <!-- 音乐视频 -->
  <div>
    <h1>MusicVideo</h1>
  </div>
</template>

<script>
// 引入 axios
import { getMusicVideo } from '@/api/home'

export default {
  name: 'MusicVideo',
  data () {
    return {
      // 视频音乐 数据
      musicVideo: []
    }
  },

  methods : {
    getMusicVideo() {
      getMusicVideo().then(res => {
        console.log(res)
      })
    }
  },

  created () {
    // this.getMusicVideo()
  }

}
</script>

<style lang="scss" scoped>

</style>