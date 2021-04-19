<template>
  <div class="page-login">
    <!-- <img v-lazy="require('@/assets/icon/loginLogo-icon.png')" alt="" class="loginLogo"> -->
    <!-- 中间logo -->
    <img src="@/assets/icon/loginLogo-icon.png" alt="" class="loginLogo">

    <!-- app登录 -->
    <div class="loginBtn-box">
      <div to="/phoneLogin" class="phoneLogin" @click="login">手机号登录</div>
      <div class="appLogin">
        <a href="javascript:;">
          <img src="@/assets/icon/loginWeChat-icon.png" alt="">
        </a>
        <a href="javascript:;">
          <img src="@/assets/icon/loginQQ-icon.png" alt="">
        </a>
        <a href="javascript:;">
          <img src="@/assets/icon/login-micro-blog-icon.png" alt="">
        </a>
        <a href="javascript:;">
          <img src="@/assets/icon/login-netease-cloud-icon.png" alt="">
        </a>
      </div>

      <!-- 协议 -->
      <div class="agreement animated" :class="{shake: beforLogin}">
        <span class="go"><input type="checkbox" v-model="agreementStatus">同意</span>
        <p>《用户协议》</p>
        <p>《隐私政策》</p>
        <p>《儿童隐私政策》</p>
      </div>
    </div>

    <div class="show" v-if="beforLogin">
      请先勾选同意 《用户协议》 《隐私政策》 《儿童隐私政策》
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      // 协议勾选状态的数据
      agreementStatus: false,

      // 登录是否显示提示勾选数据
      beforLogin: false
    }
  },

  methods: {
    // 登录操作fn
    login () {
      // 判断是否勾选协议
      if (!this.agreementStatus) {
        // 清除定时器
        clearTimeout(this.loginShow)

        // 没有勾选则显示提示
        this.beforLogin = true

        // 设置定时器做提示隐藏
        this.loginShow = setTimeout(() => {
          this.beforLogin = false
        },2000)

        return
      }

      // 跳转到手机登录界面
      this.$router.push('/phoneLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #DB2C1F;
  .loginLogo {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 180px;
    left: 50%;
    margin-left: -44px;
  }
  .loginBtn-box {
    width: 100%;
    height: 230px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .phoneLogin {
      width: 300px;
      height: 46px;
      background: #fff;
      color: #FF4949;
      border-radius: 23px;
      line-height: 46px;
      text-align: center;
    }
    .appLogin {
      width: 250px;
      height: 45px;
      display: flex;
      justify-content: space-around;
    }
    .agreement {
      width: 290px;
      height: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transform: scale(.9);
      p {
        font-size: 12px;
        color: #fff;
      }
      span {
        font-size: 14px ;
        color: #E76F67;
        line-height: 20px;
      }
    }
  }
  .show {
    width: 270px;
    height: auto;
    padding: 20px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 20px;
    position: absolute;
    bottom: 150px;
    left: 50%;
    margin-left: -135px;
    box-sizing: border-box;
  }
}
input[type=checkbox]{
     cursor: pointer;
     position: relative;
     width: 14px;
     height: 14px;
     font-size: 12px;
}
input[type=checkbox]::after{
     position: absolute;
     top: 0;
     background-color: #fff;
     color: #000;
     width: 14px;
     height: 14px;
     display: inline-block;
     visibility: visible;
     text-align: center;
     content: ' ';
}

input[type=checkbox]:checked::after{
     content: "✓";
     font-size: 12px;
     font-weight: bold;
}

</style>
