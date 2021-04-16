<template>
  <div class="HomeHeager">
    <!-- 头部菜单按钮 -->
    <div class="menuBtn" @click="show">
      <img src="@/assets/icon/homeHeaderMenu-icon.png" alt="">
    </div>

    <!-- 首页是 发现 的头部样式 -->
    <div v-if="headerShow === 'find'">
      <div class="header">
        <!-- 搜索框 -->
        <div class="find-search">
          <img src="@/assets/icon/homeSearch-icon.png" alt="">
          <p>大家都在搜 姜云升</p>
        </div>
      </div>

      <!-- 识别歌曲按钮 -->
      <div class="identifySongs">
        <img src="@/assets/icon/homeIdentifySongs-icon.png" alt="">
      </div>
    </div>

    <!-- 首页是 博客 的头部样式 -->
    <div v-if="headerShow === 'podcast'">
      <div class="box-left">
        <p :class="{actve: podcastStyle === 'hearing' }" @click="hearing">听听</p>
        <p :class="{actve: podcastStyle === 'recommend'}" @click="recommend">推荐</p>
        <p :class="{actve: podcastStyle === 'classification'}" @click="classification">分类</p>
      </div>

      <div class="box-right">
        <img src="@/assets/icon/podcast-icon.png" alt="">
      </div>
    </div>

    <!-- 首页是 K歌 的头部样式 -->
    <div v-if="headerShow === 'karaoke'">
      <div class="box-left">
        <p :class="{actve: karaokeStyle === 'square' }" @click="square">广场</p>
        <p :class="{actve: karaokeStyle === 'songRoom'}" @click="songRoom">歌房</p>
      </div>

      <div class="box-right">
        <img src="@/assets/icon/podcast-icon.png" alt="">
      </div>
    </div>

    <!-- 首页是 云村 的头部样式 -->
    <div v-if="headerShow === 'yuncun'">
      <div class="box-left">
        <p :class="{actve: yuncunStyle === 'follow' }" @click="follow">关注</p>
        <p :class="{actve: yuncunStyle === 'yuncunRecommend'}" @click="yuncunRecommend">推荐</p>
      </div>

      <div class="box-right">
        <img src="@/assets/icon/yuncun-icon.png" alt="">
      </div>
    </div>

    <!-- 点击菜单出现的列表 -->
    <HomeHeaderMenu 
      ref="HomeHeaderMenu"
      id="dowebok" 
      class="animated" 
      :class="statu"
    />

    <!-- 遮罩层 -->
    <Overlay v-show="showMenu" @click="show" />
  </div>
</template>

<script>
// 引入头部菜单组件
import HomeHeaderMenu from './HomeHeaderMenu'
// vant 遮罩层
import { Overlay } from 'vant'

export default {
  name: 'HomeHeader',

  data () {
    return {
      // 遮罩层的显示与隐藏
      showMenu: false,

      // 根据遮罩层的显示隐藏做菜单的进出
      statu: '',

      // 控制 博客 导航的类名样式 默认是 recommend
      podcastStyle: 'recommend',

      // 控制 K歌 导航的类名样式 默认是 square
      karaokeStyle: 'square',

      // 控制 云村 导航的类名样式 默认是 yuncunRecommend
      yuncunStyle: 'yuncunRecommend'
    }
  },

  props: {
    headerShow: {
      type: String,
      default: 'find'
    }
  },

  components: {
    HomeHeaderMenu,
    Overlay
  },

  methods: {
    // 对菜单的进出的数据做状态调整
    show () {
      // 判断定时器，如果为true则不执行下面代码
      if (this.timerShowMenu) return

      // 设置定时器做节流
      this.timerShowMenu = setTimeout(() => {
        this.timerShowMenu = null
      },500)

      // 对 showMenu 进行取反
      this.showMenu = !this.showMenu
      
      // 判断showMenu状态再重新赋值给statu数据 使用 animate.css 动画类名
      if (this.showMenu) {
        this.statu = 'slideInLeft'
      } else {
        this.statu = 'slideOutLeft'
      }

    },

    // 点击 播客 头部的 听听 执行的函数
    hearing () {
      this.podcastStyle = 'hearing'
    },

    // 点击 播客 头部的 推荐 执行的函数
    recommend () {
      this.podcastStyle = 'recommend'
    },
  
    // 点击 播客 头部的 分类 执行的函数
    classification () {
      this.podcastStyle = 'classification'
    },

    // 点击 K歌 头部的 广场 执行的函数 
    square () {
      this.karaokeStyle = 'square'
    },

    // 点击 K歌 头部的 歌房 执行的函数 
    songRoom () {
      this.karaokeStyle = 'songRoom'
    },

    // 点击 云村 头部的 关注 执行的函数
    follow () {
      this.yuncunStyle = 'follow'
    },

    // 点击 云村 头部的 推荐 执行的函数
    yuncunRecommend () {
      this.yuncunStyle = 'yuncunRecommend'
    }
  }
}
</script>

<style lang="scss" scoped>
.HomeHeager {
  width: 100%;
  height: 50px;
  background-color: #DCE3E3;
  padding: 0px 16px;
  padding-top: 10px;
  box-sizing: border-box;
  position: relative;
  z-index: 999;
  .menuBtn {
    float: left;
    width: 25px;
    height: 25px;
    margin-top: 4px;
  }
  .header {
    float: left;
    width: 270px;
    height: 36px;
    margin-left: 16px;
    border-radius: 16px;
    background: #fff;
    box-sizing: border-box;
    .find-search {
      width: 100%;
      height: 100%;
      display: flex;
      padding-left: 10px;
      img {
        width: 18px;
        height: 18px;
        margin-top: 10px;
      }
      p {
        flex: 1;
        height: 100%;
        line-height: 36px;
        margin-left: 10px;
        font-size: 18px;
      }
      
    }
  }
  .identifySongs {
      float: right;
      width: 19px;
      height: 25px;
      margin-top: 4px;
      margin-left: 10px;
  }
  .box-left {
    width: 200px;
    min-height: 30px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // background-color: red;
    p {
      width: auto;
      height: 20px;
      font-size: 18px;
      padding: 3px;
    }

  }
  .box-right {
    position: absolute;
    right: 20px;
    top: 14px;
  }
}
.actve {
  font-weight: 800;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 4px;
    background-image: linear-gradient(to right, #FF3D3D , #FD9191);
  }
}
#dowebok {
  animation-duration:.3s;
}
.animated {
  display: none;
}
.slideInLeft, .slideOutLeft{
  display: block;
}
</style>