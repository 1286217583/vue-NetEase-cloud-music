<template>
  <div class="contnt">
    <!-- find 发现页头部样式 | podcast 博客页头部样式 | myPage 我的页面头部样式 | karaoke K歌页面头部样式 | yuncun 云村页面头部样式 -->
    <HomeHeader :headerShow="headerStyle" class="header"/>

    <div class="middle">
      <router-view  />
    </div>
    
    <footer class="footer">
      <Play :play="play" :propsSongInformation="propsSongInformation"></Play>

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
// import { getMusicUrl, getLyric } from '@/api/home'
// 获取用户信息接口
import { getUserInformation } from '@/api/login'
// 引入头部组件
import HomeHeader from '@/components/HomeHeader'
// 音乐播放组件
import Play from '../Play'

export default {
  name: 'Home',

  data () {
    return {
      // 控制头部样式 传props 及下方字体高亮 默认 find 
      headerStyle: 'find',
      // 判断跳转是否携带了参数，参数中是否携带了id
      play: this.$route.query.id ? true : false,
    }
  },

  computed: {
    // 获取地址中的参数传给Play组件
    propsSongInformation() {
      // 判断是否携带了参数,没有就不做操作
      if (this.play) {
        return this.$route.query
      }
      return {}
    } 
  },

  components: {
    // 头部组件
    HomeHeader,
    Play
  },

  methods: {
    // 控制底部 高亮 fn
    showActive(value) {
      this.headerStyle = value
    },

    // 获取用户信息
    getUserInformation() {
      // 判断 Cookies 是否存有用户信息
      const cook = document.cookie
      let index = cook.indexOf('NMTID=')

      // 大于 -1 说明有登录
      if (index > -1) {
        getUserInformation().then(res => {
          console.log(res);
        })
      }
      
    }
  },

  created() {
    this.getUserInformation()
  },
  
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