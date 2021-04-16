<template>
  <!-- 私人定制组件 -->
  <div class="PersonalTailor">
    <p class="text">私人定制</p>
    <p class="title">
      <span class="left">
        <img src="@/assets/icon/refresh-icon.png" alt="">
        为你定制 欧美 音乐
      </span>
      <span class="right">
        <img src="@/assets/icon/play-icon.png" alt="">
        播放
      </span>
    </p>
    <section class="content">
      <div class="box">
        <div class="allbox">
          <section class="each" v-for="item in customizedData1" :key="item.id">
            <img v-lazy="item.img1v1Url" alt="">
            <span>{{ item.name }}</span>
          </section>
        </div>

        <div class="allbox">
          <section class="each" v-for="item in customizedData2" :key="item.id">
            <img v-lazy="item.img1v1Url" alt="">
            <span>{{ item.name }}</span>
          </section>
        </div>

        <div class="allbox">
          <section class="each" v-for="item in customizedData3" :key="item.id">
            <img v-lazy="item.img1v1Url" alt="">
            <span>{{ item.name }}</span>
          </section>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
// 引入axios 
import { getCustomized } from '@/api/home'

export default {
  name: 'PersonalTailor',
  data () {
    return {
      // 私人定制 欧美 数据
      customizedData1: [],
      customizedData2: [],
      customizedData3: []
    }
  },

  methods: {
    customized() {
      getCustomized().then(res => {
        for (let i = 0; i < res.artists.length; i++ ) {
          if (i <= 2) {
            this.customizedData1.push(res.artists[i])
          } else if (i <= 5) {
            this.customizedData2.push(res.artists[i])
          } else {
            this.customizedData3.push(res.artists[i])
          }
        } 
      })
    }
  },

  created () {
    this.customized()
  }

}
</script>

<style lang="scss" scoped>
.PersonalTailor {
  height: 240px;
  margin-bottom: 10px;
  background: #fff;
  .text {
    height: 18px;
    font-size: 14px;
    padding-top: 12px;
    padding: 0px 20px;
  }
  .title {
    height: 30px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 1000;
    }
    .right {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #949494;
      padding: 5px;
      border: 1px solid #E6E6E6;
      border-radius: 14px;
    }
  }
  .content {
    height: 190px;
    overflow: hidden;
    .box {
      height: 210px;
      overflow-x: scroll;
      display: flex;
      .allbox {
        padding: 0px 10px;
        .each {
          width: 320px;
          height: 50px;
          margin: 10px 0px;
          display: flex;
          img {
            width: 50px;
            height: 50px;
            
          }
        }
      }
    }
  }
}
</style>