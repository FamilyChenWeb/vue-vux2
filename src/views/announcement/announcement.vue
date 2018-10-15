<template>
  <div class="announcement">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{backText: ''}" slot="header">公告详情</x-header>
      <!--内容-->
      <div class="announcement_content">
        <h2>公告标题</h2>
        <p>2018-01-01</p>
        <div class="announcement_content_nav">
          <span>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'announcement'
}
</script>

<style scoped lang="less">
  .announcement {
    height: 100%;
    background-color: @whiteColor;
    .announcement_content {
      padding: 20px;
      border-top: 4px solid @backgroundColor;
      h2 {
        text-align: center;
        font-weight: normal;
        font-size: 24px;
      }
      p {
        color: @auxiliaryColor;
        text-align: center;
        margin-bottom: 10px;
      }
      .announcement_content_nav {
        font-size: 18px;
      }
    }
  }
</style>
