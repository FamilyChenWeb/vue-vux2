<template>
  <div class="payment">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{backText: ''}" slot="header">支付购买</x-header>
      <!--内容-->
      <group>
        <cell-box is-link class="payment_address">
          <i class="icon icon-9kaobei"></i>
          <div class="payment_consignee">
            <div class="payment_flex">
              <span>收货人:qwe</span>
              <span>18888888888</span>
            </div>
            <p>收货地址:收货地址收货地址收货地址收货地址收货地址收址</p>
          </div>
        </cell-box>
      </group>
      <group>
        <div class="payment_flex_row">
          <img :src="img" />
          <div>
            <p>123</p>
            <span>123456.00</span>
          </div>
        </div>
        <cell-form-preview :list="list">
          <p>123</p>
          <p>123456</p>
        </cell-form-preview>
      </group>
      <!--@click.native="getPayment"-->
      <x-button type="primary" @click.native="getPayment" style="position: absolute; bottom: 0;">支 付</x-button>

      <confirm v-model="show5"
               title="交易密码"
               :close-on-confirm="false"
               @on-cancel="onCancel"
               @on-confirm="onConfirm4">
        <p style="text-align:center;">需支付：<span>1000.00</span></p>
        <x-input title="" placeholder="请输入交易密码" :show-clear="false"></x-input>
      </confirm>
    </view-box>
  </div>
</template>

<script>
import src from '../../assets/img/vux_logo.png'
export default {
  name: "payment",
  data () {
    return {
      img: src,
      show5: false,
      list: [{
        label: '123456'
      },{
        label: '7894156'
      }]
    }
  },
  methods: {
    getPayment () {
      this.show5 = true;
    },
    onCancel () {
      console.log('plugin cancel')
    },
    onConfirm4 () {
      console.log('on confirm')
      this.$vux.loading.show({
        transition: '',
        text: 'processing'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.show5 = false
      }, 1000)
    },
    onHide () {
      console.log('on hide')
    },
  }
}
</script>

<style scoped lang="less">
  .payment {
    height: 100%;
    .payment_address {
      i {
        font-size: 34px;
      }
      .payment_consignee {
        width: 100%;
        padding: 0 50px 0 20px;
        .payment_flex {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .payment_flex_row {
      display: flex;
      align-items: center;
      padding: 20px;
      img {
        width: 200px;
        height: 200px;
      }
      span {
        color: #f00;
      }
    }
  }
  .weui-dialog__bd .weui-cell:before {
    top: 40px;
  }
</style>
