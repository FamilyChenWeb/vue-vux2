<template>
  <div class="myProposal">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="0">
      <!--header-->
      <x-header :left-options="{backText: ''}">我的建议</x-header>
      <div class="myProposal_content">
        <div class="myProposal_content_top">
          <span>留言类型：产品建议</span>
          <strong>2018-01-01</strong>
        </div>
        <div class="myProposal_content_center">
          <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          <img />
        </div>
        <div class="myProposal_content_bottom">
          <p>客服回复：感谢您的建议</p>
          <p>2018-01-01</p>
        </div>
      </div>
      <div class="myProposal_content">
        <div class="myProposal_content_top">
          <span>留言类型：产品建议</span>
          <strong>2018-01-01</strong>
        </div>
        <div class="myProposal_content_center">
          <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          <img />
        </div>
        <div class="myProposal_content_bottom">
          <p>客服回复：感谢您的建议</p>
          <p>2018-01-01</p>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "myProposal",
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
  .myProposal {
    height: 100%;
    .myProposal_content {
      background-color: @whiteColor;
      padding-left: 20px;
      margin-top: 20px;
      .myProposal_content_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        padding-right: 20px;
        strong {
          font-weight: normal;
          font-size: 24px;
          color: @auxiliaryColor;
        }
      }
      .myProposal_content_center {
        border-top: 1px solid @ashColor;
        border-bottom: 1px solid @ashColor;
        padding: 10px 0;
      }
      .myProposal_content_bottom {
        color: @mainColor;
        font-size: 24px;
        padding: 10px 0;
      }
    }
  }
</style>
