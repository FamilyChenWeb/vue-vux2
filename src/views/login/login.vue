<template>
  <div class="login">
    <view-box ref="viewBox" body-padding-top="43px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{showBack: false}">登 录</x-header>
      <!--logo-->
      <div class="login_logo">
        <img src="../../assets/img/logo.png" />
      </div>
      <!--input-->
      <group class="login_input">
        <x-input type="text" placeholder="请输入登录账号">
          <i slot="label" class="vue-icon icon-yonghuming"></i>
        </x-input>
        <x-input type="password" placeholder="请输入登录密码">
          <i slot="label" class="vue-icon icon-mima1"></i>
        </x-input>
        <x-input type="text" placeholder="请输入验证码">
          <i slot="label" class="vue-icon icon-anquanrenzheng"></i>
          <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
        </x-input>
      </group>
      <!--按钮-->
      <box gap="10px 10px">
        <x-button type="primary" class="but" @click.native="getLogin">登 录</x-button>
      </box>
      <div class="login_features">
        <router-link to="/registered">注册</router-link>
        <router-link to="">忘记密码</router-link>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: {
    getLogin () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped lang="less">
  .login {
    height: 100%;
    background-color: @whiteColor;
    .login_logo {
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .login_input {
      padding-right: 10PX;
      i {
        margin-right: 30px;
        font-size: 40px;
      }
    }
    .login_features {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      a {
        color: @mainColor;
      }
    }
  }
</style>
