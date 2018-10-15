<template>
  <div class="paymentSuccess">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{showBack: false}" slot="header">支付购买</x-header>
      <flexbox orient="vertical" :gutter="0" class="paymentSuccess_content">
        <flexbox-item>
          <icon type="success" is-msg></icon>
          <p>购买成功</p>
          <!--@click.native="getHome"-->
          <x-button mini type="warn" link="/" disabled>返回首页</x-button>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "paymentSuccess",
  methods: {
    getHome () {
      console.log(`123`)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped lang="less">
  .paymentSuccess {
    .paymentSuccess_content {
      margin-top: 10px;
      background-color: @whiteColor;
      text-align: center;
      padding: 30px 0;
      p {
        font-size: 28px;
        padding: 20px 0;
      }
    }
  }
</style>
