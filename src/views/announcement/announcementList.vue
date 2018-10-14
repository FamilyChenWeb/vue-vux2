<template>
  <div class="announcementList">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="0px">
      <!--header-->
      <x-header :left-options="{backText: ''}" slot="header">公 告</x-header>
      <!--内容-->
      <group>
        <cell :title="1" inline-desc='2018-01-01'></cell>
        <cell :title="2" inline-desc='2018-01-01'></cell>
        <cell :title="3" inline-desc='2018-01-01'></cell>
      </group>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'announcementList'
}
</script>

<style scoped lang="less">
  .announcementList {
    height: 100%;
  }
</style>
