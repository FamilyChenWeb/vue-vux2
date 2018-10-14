<template>
  <div class="payment">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{backText: ''}" slot="header">支付购买</x-header>
      <!--内容-->
      <group>
        <cell-box is-link class="payment_address">
          <i class="vue-icon icon-dizhi"></i>
          <div class="payment_consignee">
            <div class="payment_flex">
              <span>收货人:qwe</span>
              <span>18888888888</span>
            </div>
            <p>收货地址:收货地址收货地址收货地址收货地址收货地址收址</p>
          </div>
        </cell-box>
      </group>
      <group class="payment_column">
        <cell-box>
          <div class="payment_column_flex">
            <img :src="img" />
            <div class="payment_column_font">
              <span>V1 会员礼包</span>
              <p>100.00</p>
            </div>
          </div>
        </cell-box>
        <cell-box>
          <div class="payment_details">
            <p>V1 会员礼包详情：</p>
            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </div>
        </cell-box>
      </group>
      <x-button type="primary" class="but" @click.native="getPayment">支 付</x-button>
      <confirm
        v-model="show5"
        title="交易密码"
        :close-on-confirm="false"
        @on-cancel="onCancel"
        @on-confirm="onConfirm4"
        class="payment_confirm"
      >
        <p>需支付：<span>1000.00</span></p>
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
        font-size: 60px;
      }
      .payment_consignee {
        width: 100%;
        padding: 0 50px 0 20px;
        .payment_flex {
          display: flex;
          justify-content: space-between;
        }
        p {
          font-size: 24px;
        }
      }
    }
    .payment_column {
      .weui-cell {
        display: block;
      }
      .payment_column_flex {
        display: flex;
        align-items: center;
        img {
          display: block;
          width: 200px;
          margin-right: 30px;
        }
        .payment_column_font {
          p {
            color: @priceColor;
          }
        }
      }
      .payment_details {
        p {
          color: @auxiliaryColor;
          font-size: 24px;
        }
      }
    }
    .but {
      position: absolute;
      bottom: 0;
    }
    .payment_confirm {
      p {
        color: @secondaryColor;
        span {
          color: @priceColor;
        }
      }
    }
  }
</style>
