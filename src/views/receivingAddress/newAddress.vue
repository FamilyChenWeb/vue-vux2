<template>
  <div class="newAddress">
    <view-box ref="viewBox" body-padding-top="43px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{backText: ''}">新增地址</x-header>
      <group class="newAddress_input">
        <p>收货人姓名</p>
        <x-input type="text" placeholder="请输入收货人姓名"></x-input>
        <p>手机号码</p>
        <x-input type="number" placeholder="请输入收货人手机号码"></x-input>
        <p>所在地区</p>
        <popup-picker placeholder="请选择所在地区" :data="sexList" v-model="sex" value-text-align="left"></popup-picker>
        <p>详细地址</p>
        <x-input type="text" placeholder="请输入详细地址：如道路、门牌号、小区、楼栋号、单元室等"></x-input>
      </group>
      <div class="newAddress_but">
        <x-button type="primary" class="but">保 存</x-button>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "newAddress",
  data () {
    return {
      sex: [],
      sexList: [['ENT', 'BUT', 'ENT', 'BUT', 'ENT', 'BUT']],
    }
  }
}
</script>

<style scoped lang="less">
  .newAddress {
    .newAddress_input {
      p {
        padding-left: 15PX;
        margin-top: 10px;
      }
    }
    .newAddress_but {
      margin-top: 60px;
      padding: 0 20px;
    }
  }
</style>
