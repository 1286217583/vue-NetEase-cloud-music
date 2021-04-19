<template>
  <div class="phoneLogin">
    <h1><router-link to="/">X</router-link> 手机登录</h1>

    <!-- 手机输入手机号时的页面 -->
    <div v-show="showPhone">
        <div class="txt">
        <p class="top">登录体验更多精彩</p>
        <p class="bottom">未注册手机号登录后将自动创建账号</p>
      </div>

      <div class="phone">
        <span>+86 <img src="@/assets/icon/phoneLogin-icon.png" alt=""></span>
        <input type="search" ref="searchInp" v-model="val" />
      </div>

      <div class="next" @click="ready">下一步</div>
    </div>

    <!-- 手机输入手机号正确后进入的验证验证码页面 -->
    <div v-show="!showPhone">
      <div class="ctcode">
        <p class="code">请输入验证码</p>
        <p class="phoneNum">
          <span @click="move" class="againPhone">已发送至+86 {{ anonymousVal }} 点击重新输入手机</span>
          <span 
            @click="again"
          >
            {{ loading ? `${ctcodeTime}s` :  '重新发送'}}
          </span>
        </p>
      </div>

      <!-- 验证码输入区域 -->
        <CodeInput :phone="val" />
    </div>
  </div>
</template>

<script>
// 手机登录请求
import { getUser } from '@/api/login'
// 头部弹窗插件
import { Notify } from 'vant';

import CodeInput from './CodeInput'

export default {
  name: 'PhoneLogin',

  data () {
    return {
      // 输入框内容
      val: '',

      // 输入手机和验证码之间的切换 true 显示输入手机，false 显示验证验证码
      showPhone: true,

      // 发送验证码后重新发送的时间
      ctcodeTime: 60,

      // 等待下一次请求验证码时间
      loading: true
    }
  },

  components: {
    CodeInput
  },

  computed: {
    anonymousVal() {
      const start = this.val.slice(0, this.val.length - 8)
      const end = this.val.slice(this.val.length - 4, this.val.length)
      const str = `${start}****${end}`
      return str
    }
  },

  methods: {
    // 在挂载结束后调用 input 框的自动获取焦点
    inpFocus() {
      this.$refs.searchInp.focus()
    },

    // 手机登录请求 fn
    ready() {
      // 正则 判断是否是手机号
      const reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;

      // 如果为false 取反 为true 然后 弹窗提示  如果为 true 取反为 false
      if (!reg.test(this.val)) {
        Notify('请输入正确的手机号码') 
        return
      }

      // 执行计时器
      this.requestTimer()

      // 发送请求
      this.getUser()
    },

    // 再验证码页点击号码返回输入手机页 fn
    move() {
      // 重设倒计时 并 清除计时器
      this.ctcodeTime = 60
      clearInterval(this.loginTime)

      // 显示 输入数据页面
      this.showPhone = true
    },

    // 重新发送请求
    again() {
      // 判断计时器是否结束 未结束则不做操作 结束再启动计时器
      if (!this.loading) {
        // 重设倒计时
        this.ctcodeTime = 60
        this.requestTimer()
        // 发送请求
        this.getUser()
      }
    },

    // 请求发送计时器
    requestTimer() {
      this.loading = true
      // 倒计时
      this.loginTime = setInterval(() => {
        // 临界值判断 this.ctcodeTime是否为 0 为 0则显示重新发送
        if (this.ctcodeTime <= 0) {
          // 清除计时器
          clearInterval(this.loginTime)
          // loading 赋值为 false
          this.loading = false
        } else {
          // 不为0 则 减减
          this.ctcodeTime --
        }
      },1000)
    },

    // 发送手机登录请求
    getUser () {
      getUser(this.val).then(res => {
        console.log(res);
        if (res.code === 200) {
          // 切换到验证验证码
          this.showPhone = false
        }
      })
    },
  },

  mounted() {
    this.inpFocus()
  }
}
</script>

<style lang='scss' scoped>
.phoneLogin {
  padding: 20px;
  h1 {
    a {
      margin-right: 20px;
    }
  }
  .txt {
    padding: 40px 0px;
    font-size: 16px;
    .top {
      line-height: 44px;
      font-size: 22px;
    }
    .bottom {
      color: #999;
    }
  }
  .phone {
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    span {
      width: 80px;
      display: flex;
      font-size: 20px;
      justify-content: space-around;
    }
    input {
      flex: 1;
      border: 0px;
      font-size: 24px;
    }
  }
  .next {
    height: 40px;
    background: red;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    margin-top: 40px;
  }
  .ctcode {
    padding: 40px 0px;
    font-size: 16px;
    .code {
      height: 44px;
      font-size: 20px;
      font-weight: 1000;
      line-height: 44px;
    }
    .phoneNum {
      display: flex;
      justify-content: space-between;
      .againPhone {
        font-size: 12px;
      }
    }
  }
}
</style>