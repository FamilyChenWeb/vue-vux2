<template>
  <div class="turnOut">
    <view-box ref="viewBox" body-padding-top="43px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{backText: ''}">转出<router-link to="/turnOutRecord" slot="right">转出记录</router-link></x-header>
      <group title="我的余额：123.00" class="turnOut_input">
        <p>输入账号</p>
        <x-input type="number" placeholder="请输入手机验证码"></x-input>
        <p>转账币种</p>
        <popup-picker placeholder="请选择币种" :data="sexList" v-model="sex" value-text-align="left"></popup-picker>
        <p>转出余额</p>
        <x-input type="number" placeholder="请输入手机验证码"></x-input>
        <p>交易密码</p>
        <x-input type="password" placeholder="请输入手机验证码"></x-input>
      </group>
      <div class="turnOut_but">
        <x-button type="primary" class="but">确定转出</x-button>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "turnOut",
  data () {
    return {
      sex: [],
      sexList: [['ENT', 'BUT', 'ENT', 'BUT', 'ENT', 'BUT']],
    }
  }
}
</script>

<style scoped lang="less">
  .turnOut {
    .turnOut_input {
      p {
        padding-left: 15PX;
        margin-top: 10px;
      }
    }
    .turnOut_but {
      margin-top: 60px;
      padding: 0 20px;
    }
  }
</style>
