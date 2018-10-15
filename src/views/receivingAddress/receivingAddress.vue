<template>
  <div class="receivingAddress">
    <view-box ref="viewBox" body-padding-top="46px"  body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{backText: ''}">收货地址</x-header>
      <group class="receivingAddress_list">
        <cell-box>
          <div class="receivingAddress_flex">
            <span>name</span>
            <span>18888888888</span>
          </div>
          <p>地址地址地址地址地址地址地址址地址地址地址地址地址地址地址地址地址地址</p>
        </cell-box>
        <cell-box>
          <div class="receivingAddress_flex">
            <check-icon :value.sync="demo1">设为默认地址</check-icon>
            <div class="receivingAddress_but">
              <x-button mini>编辑</x-button>
              <x-button mini>删除</x-button>
            </div>
          </div>
        </cell-box>
      </group>
      <group class="receivingAddress_list">
        <cell-box>
          <div class="receivingAddress_flex">
            <span>name</span>
            <span>18888888888</span>
          </div>
          <p>地址地址地址地址地址地址地址址地址地址地址地址地址地址地址地址地址地址</p>
        </cell-box>
        <cell-box>
          <div class="receivingAddress_flex">
            <check-icon :value.sync="demo1">设为默认地址</check-icon>
            <div class="receivingAddress_but">
              <x-button mini>编辑</x-button>
              <x-button mini>删除</x-button>
            </div>
          </div>
        </cell-box>
      </group>
      <x-button type="primary" class="but">新增地址</x-button>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "receivingAddress",
  data () {
    return {
      demo1: true,
      demo2: true
    }
  },
  methods: {
    change (val, label) {
      console.log('change', val, label)
    },
    selectFirst () {
      this.checklist001 = ['China']
    },
    selectFirstTwo () {
      this.checklist001 = ['China', 'Japan']
    },
    selectLeft () {
      const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
      this.checklist001 = left
    }
  },
}
</script>

<style scoped lang="less">
  .receivingAddress {
    height: 100%;
    .receivingAddress_list {
      p {
        font-size: 12px;
      }
      .receivingAddress_flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .but {
      position: absolute;
      bottom: 0;
    }
  }
</style>
