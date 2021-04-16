<template>
  <!-- <div class="menu"  ref="menu" @touchstart="move" @touchend="evMove = null"> -->
  <div class="menu"  ref="menu">
    <List class="mamrgin-bottom">
      <!-- 个人 -->
      <div class="my">
        <div class="my-box">
          <div class="personal">
            <img :src="headPortrait" alt="">
            <span> {{ userName }} ></span>
          </div>
          <img class="sweep" src="@/assets/icon/mune-sweep-icon.png">
        </div>
      </div>
    </List>

    <div class="allBox">
      <!-- vip -->
      <List class="mamrgin-bottom">
        <div class="vip">
          <List>
            <div class="vip-top">
              <div>
                <List class="opening">开通黑胶VIP</List>
                <List class="privilege">立享超17项专属特权></List>
              </div>
              <div class="vip-core">会员中心</div>
            </div>
          </List>

          <List class="vip-bottom">
            黑胶VIP仅5元！每天低至0.16元
          </List>
        </div>
      </List>

      <!-- 我的消息 云贝中心 -->
      <List class="mamrgin-bottom style">
        <div class="box">
          <List class="top border-bottom">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>我的消息</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="bottom">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>云贝中心</span>
            </List>
            <List class="right">
              <span>做任务赚云贝 <img src="@/assets/icon/all-icon.png" alt=""> ></span>
            </List>
          </List>
        </div>
      </List>

      <!-- 音乐服务 -->
      <List class="mamrgin-bottom style">
        <List class="title border-bottom">
          音乐服务
        </List>

        <div class="box">
          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>云村有票</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="bottom">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>商城</span>
            </List>
            <List class="right">
              <span>运动耳机29元抢 <img src="@/assets/icon/all-icon.png" alt=""> ></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>游戏专区</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="bottom">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>口袋</span>
            </List>
            <List class="right">
              <span>音乐美食我都有 <img src="@/assets/icon/all-icon.png" alt=""> ></span>
            </List>
          </List>

          
        </div>
      </List>

      <!-- 其他 -->
      <List class="mamrgin-bottom style">
        <List class="title border-bottom">
          其他
        </List>

        <div class="box">
          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>设置</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="bottom">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>夜间模式</span>
            </List>
            <List class="right">
              <span>关</span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>定时开过</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>个性装扮</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>边听边存</span>
            </List>
            <List class="right">
              <span>未开启 ></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>在线听歌免流量</span>
            </List>
            <List class="right">
              <span></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>音乐黑名单</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>请少年模式</span>
            </List>
            <List class="right">
              <span>未开启 ></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>音乐闹钟</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>
          
        </div>
      </List>

      <!-- 我的订单 优惠券  -->
      <List class="mamrgin-bottom style">
        <div class="box">
          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>我的订单</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>优惠券</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>帮助与反馈</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>分享网易云音乐</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>

          <List class="top">
            <List class="left">
              <img src="@/assets/icon/all-icon.png" alt="">
              <span>关于</span>
            </List>
            <List class="right">
              <span>></span>
            </List>
          </List>
        </div>
      </List>

      <List class="stop">关闭云音乐</List>
    </div>
  </div>
</template>

<script>
import { List} from 'vant'

export default {
  name: 'HomeHeaderMenu',
  data () {
    return {
      show: true,
    }
  },

  props: {
    userName: {
      type: String,
      default: '立即登录'
    },
    headPortrait: {
      type: String,
      default: require('@/assets/icon/mune-personal-icon.png')
    }
    
  },
  components: {
    List
  },

  methods: {
    // move (event) { 

    //   // 110
    //   // console.log(event.touches[0].clientX);
    //   let start = event.touches[0].clientX
    //   // console.log(start)
    //   const node = this.$refs.menu

    //   this.evMove = node.ontouchmove = (ev) => {
    //     let move = ev.touches[0].clientX
    //     let now = Math.ceil(start - move)
    //     // console.log(start, now);
    //     // console.log(node.offsetLeft)
    //     console.log(((node.offsetLeft - now) / node.clientWidth))
    //     let result = Math.ceil(((node.offsetLeft - now) / node.clientWidth) * 100 / 37.5 )+'rem'
    //     node.style.left = result
    //   }
    // },
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    width: 80%;
    height: auto;
    background-color:#F5F5F5;
    position: fixed;
    left: 0px;
    top: 0px;
    padding: 0 20px;
    z-index: 2;
    .my {
      width: 100%;
      height: 55px;
      background: #F5F5F5;
      padding: 10px;
      box-sizing: border-box;
      .my-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        .personal {
          flex: 1;
          display: flex;
          align-items: center;
          img {
            border-radius: 50%;
          }
          span {
            margin-left: 10px;
            font-size: 16px;
            font-weight: 1000;
          }
        }
        .sweep {
          width: 30px;
          height: 30px;
        }
      }
    }
    .vip{
      width: 100%;
      height: 120px;
      background-image: linear-gradient(to right, #8C8C8C , #B8B8B8);
      border-radius: 20px;
      padding: 0px 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .vip-top {
        padding: 12px 0px;
        display: flex;
        justify-content: space-around;
        position: relative;
        .opening {
          font-size: 24px;
          color: #fff;
        }
        .privilege {
          font-size: 14px;
          color: #CDCDCD;
          line-height: 26px;
        }
        .vip-core {
          width: 72px;
          height: 27px;
          line-height: 27px;
          text-align: center;
          font-size: 12px;
          border-radius: 10px;
          border: 1px solid #fff;
          margin-left: 20px;
          color: #fff;
        }
      }
      .vip-top::after{
        content: '';
        height: 1px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: #AAAAAA;
      }
      .vip-bottom {
        flex: 1;
        align-items: center;
        font-size: 14px;
        color: #CDCDCD;
        line-height: 26px;
        line-height: 47px;
      }
    }
    .box {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 16px;
      .top, .bottom {
        width: 100%;
        height: 54px;
      }
      .left {
        height: 54px;
        float: left;
        display: flex;
        align-items: center;
        color: #000;
        img {
          margin-right: 10px;
        }
      }
      .right {
        height: 54px;
        float: right;
        color: #B7B7B7;
        display: flex;
        align-items: center;
        span {
          display: flex;
          align-items: center;
          font-size: 12px;
          img {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .allBox {
    max-height: 600px; 
    overflow-y: scroll; 
    padding-bottom: 20px; 
    box-sizing: border-box;
    .stop {
      height: 40px;
      background: #fff;
      border-radius: 20px;
      line-height: 40px;
      text-align: center;
      color: red;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .mamrgin-bottom {
    margin-bottom: 20px;
  }
  .style {
    background: #fff;
    border-radius: 20px;
    padding: 14px;
    .title {
      height: 40px;
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #B7B7B7;
    }
  }

  .border-bottom {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #e9e9e9;
    transform: scaleY(0.5);
  }
}
</style>