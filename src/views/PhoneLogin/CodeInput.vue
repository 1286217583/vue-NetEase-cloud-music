<template>
  <div>
    <div class="verificationBox" @click="show = true">
      <div 
        v-for="item in 4" 
        :key="item" 
        class="inp"
        :ref="item"
        >
        {{ val[item-1] }}
      </div>
    </div>

    <van-number-keyboard 
      :show='show'
      @blur="show = false"
      @input="onChange"
      @delete='remove'
    />
  </div>
</template>

<script>
import Vue from 'vue';
// vant 插件 (数字键盘、头部弹窗)
import { NumberKeyboard, Notify } from 'vant';
// 验证验证码请求
import { codeCheck } from '@/api/login'
Vue.use(NumberKeyboard);

export default {
  name: "CodeInput",
  data() {
    return {
      // 六位验证码的数据
      val: {
        0: '',
        1: '',
        2: '',
        3: ''
      },

      // 输入框数量
      num: 0,
      
      // 键盘的显示
      show: true
    }
  },

  props: {
    phone: {
      type: String,
      required: true
    }
  },

  methods: {
    // 点击键盘触发 fn
    onChange(value) {
      // 将每一位的验证码 赋值 给val
      this.val[this.num] = value

      // 对 num ++
      this.num ++
 
      // 如果num 大于或等于 6 说明 输入完全部验证码 对num 赋值 为 0 并发送请求校验验证码
      if (this.num >= 4) {
        this.num = 0
        let str = ''
        // 对 val 进行遍历
        for (let key in this.val) {
          str += this.val[key]
        }

        // 发送验证请求
        this.codeCheck(this.phone, str)

        // 清空验证码
        for (let keys in this.val) {
          this.val[keys] = ''
        }
      }

    },

    // 点击删除触发 fn
    remove() {
      // num -1 赋值 为 ''
      this.val[this.num-1] = ''
      // num --
      this.num --

      // 如果num 小于或等于 0 则 num 为 0
      if (this.num <= 0) {
        this.num = 0
      }
    },

    // 发送验证请求
    codeCheck(phone, captcha) {
      codeCheck(phone, captcha).then(res => {
        if (res.code === 200) {
          // 回到首页
          this.$router.replace('/')
        } else {
          Notify('验证码错误')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.verificationBox {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .inp {
      width: 20px;
      height: 45px;
      text-align: center;
      border: 0px;
      border-bottom: 2px solid #999;
      margin: 0px 10px;
      input {
        height: 43px;
        .van-cell__value {
          height: 100%;
          .van-field__body {
            height: 100%;
            .van-field__control {
              height: 100%;
            }
          }
        }
      }
    }
    
    
    .van-cell {
      padding: 0px;
    }
    .van-field__control {
      width: 20px;
    }
  }
</style>