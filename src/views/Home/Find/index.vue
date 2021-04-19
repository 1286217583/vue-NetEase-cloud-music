<template>
  <div class="content">
    <!-- 轮播图 -->
    <Banner></Banner>
    
    <!-- 发现页导航 -->
    <div class="nav">
      <div class="nav-box">
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>每日推荐</p>
        </section>
        <section class="only" @click="gofm">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>私人FM</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>歌单</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>排行榜</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>直播</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>数字专辑</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>歌房</p>
        </section>
        <section class="only">
          <img src="@/assets/icon/home-navigation-icon.png" alt="">
          <p>游戏专区</p>
        </section>        
      </div>
    </div>

    <!-- 推荐歌单 -->
    <RecommendedSongList></RecommendedSongList>

    <!-- 私人定制 -->
    <PersonalTailor></PersonalTailor>

    <!-- 音乐视频 -->
    <MusicVideo></MusicVideo>
  </div>
</template>

<script>
// 引入轮播图 组件
import Banner from './Banner'
// 引入 推荐歌单 组件
import RecommendedSongList from './RecommendedSongList'
// 引入 私人定制 组件
import PersonalTailor from './PersonalTailor'
// 引入 音乐视频 组件
import MusicVideo from './MusicVideo'

export default {
  name: 'find',

  components: {
    Banner,
    RecommendedSongList,
    PersonalTailor,
    MusicVideo
  },

  methods: {
    gofm() {
      this.$emit('showfmt')
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  width: 375px;
  overflow-y:scroll ;
}
.nav {
  height: 100px;
  padding-bottom: 10px;
  background: #fff;
  overflow: hidden;
  .nav-box {
    height: 120px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    .only {
      width: 100px;
      height: 70px;
      padding: 0px 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>