<template>
  <div class="turnOutRecord">
  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
    <!--header-->
    <x-header :left-options="{backText: ''}">转出记录</x-header>
    <group>
      <cell-box>
        <div class="turnOutRecord_flex">
          <span>转出</span>
          <span class="turnOutRecord_num">-10.00</span>
        </div>
        <p>2018-01-01</p>
      </cell-box>
      <cell-box>
        <div class="turnOutRecord_flex">
          <span>转出</span>
          <span class="turnOutRecord_num">-10.00</span>
        </div>
        <p>2018-01-01</p>
      </cell-box>
    </group>
  </view-box>
  </div>
</template>

<script>
export default {
  name: "turnOutRecord"
}
</script>

<style scoped lang="less">
  .turnOutRecord {
    .turnOutRecord_flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .turnOutRecord_num {
        color: @auxiliaryColor;
      }
    }
    p {
      font-size: 12px;
      color: @auxiliaryColor;
    }
  }
</style>
