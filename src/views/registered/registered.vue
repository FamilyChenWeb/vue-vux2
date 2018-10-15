<template>
  <div class="registered">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{showBack: false}">注 册</x-header>
      <!--logo-->
      <div class="registered_logo">
        <img src="../../assets/img/logo.png" />
      </div>
      <!--input-->
      <group class="registered_input">
        <x-input type="number" placeholder="请输入手机号码" class="weui-vcode">
          <i slot="label" class="vue-icon icon-9kaobei"></i>
          <x-button slot="right" type="primary" mini class="but">发送验证码</x-button>
        </x-input>
        <x-input type="number" placeholder="请输入手机验证码">
          <i slot="label" class="vue-icon icon-anquanrenzheng"></i>
        </x-input>
        <x-input type="password" placeholder="请输入登录密码">
          <i slot="label" class="vue-icon icon-mima1"></i>
        </x-input>
        <x-input type="password" placeholder="请再次输入登录密码">
          <i slot="label" class="vue-icon icon-mima1"></i>
        </x-input>
        <popup-picker title="<i slot='label' class='vue-icon icon-mima1 popup_icon'></i>" placeholder="请选择性别" :data="sexList" v-model="sex" value-text-align="left"></popup-picker>
        <x-input type="text" placeholder="请输入邀请码">
          <i slot="label" class="vue-icon icon-yaoqinghuoban"></i>
        </x-input>
      </group>
      <div class="registered_but">
        <x-button type="primary" class="but">注 册</x-button>
      </div>
      <div class="registered_features">
        <router-link to="/login">登 录</router-link>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "registered",
  data () {
    return {
      sex: [],
      sexList: [['男', '女']],
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .registered {
    height: 100%;
    background-color: @whiteColor;
    .registered_logo {
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .registered_input {
      padding-right: 15px;
      i {
        margin-right: 10px;
        font-size: 24px;
      }
    }
    .registered_features {
      text-align: center;
      a {
        color: @mainColor;
      }
    }
    .registered_but {
      padding: 0 15px;
      margin-top: 50px;
      margin-bottom: 10px;
    }
  }
</style>
