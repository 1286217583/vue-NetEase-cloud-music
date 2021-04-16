<template>
<!-- 轮播图组件 -->
  <swipe class="bannerBox" :autoplay="4000">
    <SwipeItem 
      v-for='item in banners' 
      :key="item.url" 
      class="content" >
      <div 
      class="image"
      :style="{
        backgroundImage: `url(${item.pic})`,
      }"
      >
      </div>

      <span :style="{background:item.titleColor}">{{ item.typeTitle }}</span>
    </SwipeItem>
  </swipe>
</template>

<script>
// 引入 数据请求接口
import { getBanner } from '@/api/home'

// 引入 vant 的轮播
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'Banner',
  data () {
    return {
      banners: []
    }
  },
  components: {
    Swipe,
    SwipeItem
  },

  methods: {
    getBanner () {
      getBanner().then(res => {
        if (res.code === 200) {
          this.banners = res.banners
        }
      })
    }
  },

  created () {
    this.getBanner()
  }

}
</script>


<style lang="scss" scoped>
.bannerBox {
  height: 182px;
  .content {
    width: 375px;
    padding: 0px 20px;
    padding-top: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    position: relative;
    .image {
      width: 335px;
      height: 162px;
      border-radius: 20px;
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
    }
    span {
      position: absolute;
      right: 20px;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      padding: 10px;
      border-radius: 20px 0px 20px 0px;
    }
  }
}
.van-swipe__indicator {
  height: 2px;
  width: 10px;
  border-radius: 0px;
  background-color: #fff;
}
</style>