<template>
  <div class="paymentSuccess">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{showBack: false}" slot="header">支付购买</x-header>
      <flexbox orient="vertical" :gutter="0" class="paymentSuccess_content">
        <flexbox-item>
          <i class="icon icon-9kaobei"></i>
          <p>购买成功</p>
          <x-button mini type="warn" disabled>disable mini Delete</x-button>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "paymentSuccess"
}
</script>

<style scoped lang="less">
  .paymentSuccess {
    .paymentSuccess_content {
      margin-top: 20px;
      background-color: #fff;
      text-align: center;
      padding: 60px 0;
      i {
        font-size: 92px;
      }
      p {
        font-size: 48px;
      }
    }
  }
</style>
