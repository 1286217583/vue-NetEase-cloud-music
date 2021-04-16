<template>
  <div class="contnt">
    <!-- find 发现页头部样式 | podcast 博客页头部样式 | myPage 我的页面头部样式 | karaoke K歌页面头部样式 | yuncun 云村页面头部样式 -->
    <HomeHeader :headerShow="headerStyle" class="header"/>
    
    <div class="middle">
      <router-view  />
    </div>
    
    <footer class="footer">
      <!-- 音乐播放器 -->
      <aplayer :audio="audio" :lrcType="3" style="width: 100%;position: absolute; top: -90px; left: 0px;" />

      <div class="bottomNavigation">
        <div @click="showActive('find')">
          <router-link to="find" class="target">
            <img src="@/assets/icon/home-bottom-icon.png" alt="">
            <p :class="{'font-avtive': headerStyle === 'find'}">发现</p>
          </router-link>
        </div>

        <div @click="showActive('podcast')">
          <router-link to="podcast" class="target" >
            <img src="@/assets/icon/home-bottom-icon.png" alt="">
            <p :class="{'font-avtive': headerStyle === 'podcast'}">播客</p>
          </router-link>
        </div>

        <div @click="showActive('myPage')">
          <router-link to="myPage" class="target">
            <img src="@/assets/icon/home-bottom-icon.png" alt="">
            <p :class="{'font-avtive': headerStyle === 'myPage'}">我的</p>
          </router-link>
        </div>

        <div @click="showActive('karaoke')">
          <router-link to="karaoke" class="target">
            <img src="@/assets/icon/home-bottom-icon.png" alt="">
            <p :class="{'font-avtive': headerStyle === 'karaoke'}">K歌</p>
          </router-link>
        </div>

        <div @click="showActive('yuncun')">
          <router-link to="yuncun" class="target">
            <img src="@/assets/icon/home-bottom-icon.png" alt="">
            <p :class="{'font-avtive': headerStyle === 'yuncun'}">云村</p>
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

// 引入头部组件
import HomeHeader from '@/components/HomeHeader'
// 引入 音乐播放组件
import APlayer from '@moefe/vue-aplayer';
import Vue from 'vue'

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

export default {
  name: 'Home',

  data () {
    return {
      // 控制头部样式 传props 及下方字体高亮 默认 find 
      headerStyle: 'find',
      audio: {
        name: '起风了',
        artist: '买辣椒也用券',
        url: 'http://m8.music.126.net/20210417014048/1b95ea677ef524b84308439f292dedad/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
    }
  },

  components: {
    // 头部组件
    HomeHeader,
  },

  methods: {
    showActive(value) {
      console.log('s');
      this.headerStyle = value
    }
  }
  
}
</script>

<style lang="scss" scoped>
.contnt {
  height: 100%;
  background-image: linear-gradient( #DCE3E3 , #fff);
  position: relative;
  // z-index: -1;
  .header {
    height: 50px;
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .middle {
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 175px;
    overflow-y: auto;

  }
  .footer {
    height: 80px;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    background: #fff;
    .bottomNavigation {
      display: flex;
      justify-content: space-around;
      .target {
        display: block;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 14px;
          color: #B6B6B6;
        }
        .font-avtive {
          color: red;
        }
      }
    }
  }
}

</style>