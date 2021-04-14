<template>
  <div class="page-login">
    <!-- <img v-lazy="require('@/assets/icon/loginLogo-icon.png')" alt="" class="loginLogo"> -->
    <!-- 中间logo -->
    <img src="@/assets/icon/loginLogo-icon.png" alt="" class="loginLogo">

    <!-- app登录 -->
    <div class="loginBtn-box">
      <div class="phoneLogin">手机号登录</div>
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
      <div class="agreement">
        <span class="go"><input type="checkbox">同意</span>
        <p>《用户协议》</p>
        <p>《隐私协议》</p>
        <p>《儿童隐私协议》</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
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
