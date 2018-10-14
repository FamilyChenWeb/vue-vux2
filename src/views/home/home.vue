<template>
  <div class="home" style="height: 100%;">
    <!--头部-->
    <view-box ref="viewBox" body-padding-bottom="54px">
      <div class="home_positioning">
        <!--背景图-->
        <div class="home_background">
          <img src="../../assets/img/bj.jpg"/>
        </div>
        <!--内容-->
        <flexbox orient="vertical" :gutter="0" class="home_personal">
          <!--头像-->
          <div class="home_portrait">
            <img :src="portrait" />
            <img class="home_portrait_grade" :src="portrait"/>
          </div>
          <!--用户-->
          <div class="home_name">
            <p>18888888888</p>
            <!--星级-->
            <div class="home_star">
              <rater :max="data1" v-model="data1" active-color="#F6FE00" disabled></rater>
            </div>
            <div class="home_people">
              <span>在我之后有123456人</span>
            </div>
          </div>
          <!--功能-->
          <div class="home_flex">
            <div class="home_scan">
              <i class="vue-icon icon-saoyisao"></i>
              <p>扫一扫</p>
            </div>
            <span></span>
            <div class="home_scan">
              <i class="vue-icon icon-shoukuanma"></i>
              <p>收款码</p>
            </div>
          </div>
          <!--余额-->
          <flexbox :gutter="0" class="home_background_color">
            <flexbox-item class="pd_15">
              <div class="home_assets">
                <p><i class="vue-icon icon-qianbao"></i>余额</p>
                <span>361</span>
              </div>
            </flexbox-item>
            <flexbox-item class="pd_15">
              <div class="home_assets">
                <p><i class="vue-icon icon-weibiaoti-"></i>资产中心</p>
                <span>361</span>
              </div>
            </flexbox-item>
          </flexbox>
          <!--积分、币额-->
          <grid :cols="2" :show-lr-borders="false" class="home_grid">
            <grid-item class="home_space_between">
              <span><i class="vue-icon icon-jifen"></i>幸运积分</span>
              <strong>{{num}}</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="vue-icon icon-qiandai_"></i>销售佣金</span>
              <strong>123</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="vue-icon icon-jinrongtongxun"></i>现金币</span>
              <strong>123</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="vue-icon icon-qian"></i>报单币</span>
              <strong>123</strong>
            </grid-item>
          </grid>
          <!--公告-->
          <div class="home_announcement">
            <div class="home_border">
              <i class="vue-icon icon-gonggao1"></i>
              <marquee>
                <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容{{i}}</marquee-item>
              </marquee>
              <div class="home_announcement1">
                <router-link to="/announcement">更多</router-link>
              </div>
            </div>
          </div>
          <!--菜单-->
          <grid :cols="3" :show-lr-borders="false" class="home_a">
            <grid-item v-for="(item, index) in icon" :key="index" @click.native="getMenu(index)" class="home_menu">
              <i :class="item.menuIcon" :style="{color: item.colorIcon}"></i>
              <p class="grid-center">{{item.menuName}}</p>
            </grid-item>
          </grid>
        </flexbox>
      </div>
      <tabbar slot="bottom">
        <tabbar-item link="/home" selected>
          <i slot="icon" class="vue-icon icon-home"></i>
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="vue-icon icon-dianpu1"></i>
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item link="/component/demo">
          <i slot="icon" class="vue-icon icon-jifen"></i>
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="vue-icon icon-wode"></i>
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { login } from '../../api/api';
import src from '../../assets/img/vux_logo.png'
export default {
  name: 'home',
  data () {
    return {
      asyncCount: 0,
      portrait: src,
      data1: 3,
      num: '',
      icon: [
        {
          menuIcon: 'vue-icon icon-yinhangqia1',
          menuName: '转出',
          colorIcon: '#5d39fc',
          url: '/turnOut'
        },
        {
          menuIcon: 'vue-icon icon-jifen1',
          menuName: '转入',
          colorIcon: '#f8f000',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-licai',
          menuName: '理财',
          colorIcon: '#5d3afc',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-huiyuan',
          menuName: '会员礼包',
          colorIcon: '#EE4C00',
          url: '/membership'
        },
        {
          menuIcon: 'vue-icon icon-dianpu1',
          menuName: '商城',
          colorIcon: '#8F76FC',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-qian',
          menuName: '交易市场',
          colorIcon: '#00DF73',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-tuandui',
          menuName: '团队',
          colorIcon: '#F8F000',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-xinwen',
          menuName: '分享',
          colorIcon: '#00DF73',
          url: '/'
        },
        {
          menuIcon: 'vue-icon icon-wenti',
          menuName: '投资建议',
          colorIcon: '#F8F000',
          url: '/proposal'
        }
      ]
    }
  },
  methods: {
    onClick (i) {
      console.log(i)
    },
    getMenu (e) {
      this.$router.push({ path: this.icon[e].url })
    }
  },
  mounted () {
    this.num = '8'
    console.log(this.num)
    const pamet = {key: '00d91e8e0cca2b76f515926a36db68f5', account: '13594347817', password: '123456'}
    this.postRequest(login, pamet).then(({data}) => {
      console.log('data-----', data)
    })
    console.log(this.icon)
    this.$vux.loading.show({
      text: 'Loading'
    })
    setTimeout(() => {
      this.asyncCount = 5
      this.$vux.loading.hide()
    }, 500)
  }
}
</script>

<style scoped lang="less">
  .home_positioning {
    position: relative;
    width: 100%;
    .home_background {
      position: absolute;
      top: 0;
      left: 0;
      img {
        display: block;
        width: 100%;
      }
    }
    .home_personal {
      position: absolute;
      top: 0;
      left: 0;
      padding-bottom: 54PX;
      .home_portrait {
        position: relative;
        img {
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
          margin-top: 40px;
        }
        .home_portrait_grade {
          width: 40px;
          height: 40px;
          position: absolute;
          bottom: 0;
          right: -10px;
          background-color: #f00;
        }
      }
      .home_name {
        text-align: center;
        margin-top: 10px;
        p {
          color: @whiteColor;
        }
        .home_star {
          margin-top: -18px;
        }
        .home_people {
          background-color: @yellowColor;
          height: 40px;
          padding: 0 20px;
          border-radius: 20px;
          line-height: 40px;
          span {
            color: @priceColor;
            font-size: 24px;
          }
        }
      }
      .home_flex {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        .home_scan {
          flex: 1;
          margin: 0 auto;
          text-align: center;
          color: @whiteColor;
          i {
            font-size: 60px;
          }
          p {
            font-size: 24px;
          }
        }
        span {
          display: block;
          width: 2px;
          height: 50px;
          background-color: @mainColor;
        }
      }
      .home_background_color {
        background-color: @whiteColor;
        .pd_15 {
          padding: 0 30px;
        }
        .home_assets {
          p {
            i {
              margin-right: 6px;
              font-size: 34px;
            }
          }
          span {
            color: @mainColor;
          }
        }
      }
      .home_grid {
        width: 100%;
        background-color: @whiteColor;
        .weui-grid {
          padding: 8px 15px;
        }
        .home_space_between {
          display: flex;
          justify-content: space-between;
          span {
            color: @secondaryColor;
            i {
              margin-right: 6px;
              font-size: 34px;
            }
          }
          strong {
            font-weight: normal;
            color: @mainColor;
          }
        }
      }
      .home_announcement {
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: @backgroundColor;
        .home_border {
          display: flex;
          flex-direction: row;
          align-items: center;
          background-color: @whiteColor;
          color: @mainColor;
          padding: 0 10px;
          padding-right: 80px;
          border-radius: 10px;
          i {
            margin-right: 10px;
            font-size: 34px;
          }
          .home_announcement {
            color: @mainColor;
          }
          .home_announcement1 {
            position: absolute;
            right: 30px;
          }
        }
      }
      .home_a {
        background-color: @whiteColor;
        .home_menu {
          text-align: center;
          i {
            font-size: 60px;
          }
          p {
            font-size: 24px;
            color: @secondaryColor;
          }
        }
      }
    }
  }
</style>
