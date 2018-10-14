<template>
  <div class="membership">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="0px">
      <!--header-->
      <x-header :left-options="{backText: ''}" slot="header">会员礼包</x-header>
      <!--内容-->
      <flexbox wrap="wrap" class="membership_content">
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox wrap="wrap" class="membership_content">
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox wrap="wrap" class="membership_content">
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox wrap="wrap" class="membership_content">
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
        <flexbox-item class="membership_list">
          <img :src="img" />
          <div class="membership_font">
            <span>V1会员礼包</span>
            <p>1000.00</p>
          </div>
        </flexbox-item>
      </flexbox>
    </view-box>
  </div>
</template>

<script>
import src from '../../assets/img/vux_logo.png'
export default {
  name: "membership",
  data () {
    return {
      img: src
    }
  }
}
</script>

<style scoped lang="less">
  .membership {
    height: 100%;
    box-sizing: border-box;
    .membership_content {
      padding: 10px 20px;
      box-sizing: border-box;
      .membership_list {
        background-color: #fff;
        img {
          display: block;
          width: 100%;

        }
        .membership_font {
          padding: 0 20px;
          p {
            color: #f00;
          }
        }
      }
    }
  }
</style>
