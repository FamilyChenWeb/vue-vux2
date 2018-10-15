<template>
  <div class="proposal">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{backText: ''}">投诉建议<router-link to="/myProposal" slot="right">我的建议</router-link></x-header>
      <group title="请选择留言类型">
        <radio :selected-label-style="{color: '#B4A9FD'}" :options="radio001" v-model="radio001Value" @on-change="change"></radio>
      </group>
      <group>
        <x-textarea :max="200" name="detail" placeholder="请输入您的留言" :show-counter="false"></x-textarea>
      </group>
      <x-button type="primary" class="but">发 送</x-button>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "proposal",
  data () {
    return {
      radio001: [ '产品建议：用得 不爽，我有建议', '功能问题：功能故障或不可用', '其他问题' ],
      radio001Value: '产品建议：用得 不爽，我有建议',
      radio002Value: '功能问题：功能故障或不可用',
      radio003Value: '其他问题'
    }
  },
  methods: {
    change (value, label) {
      console.log('change:', value, label)
    }
  }
}
</script>

<style scoped lang="less">
  .proposal {
    height: 100%;
    .but {
      position: absolute;
      bottom: 0;
    }
  }
</style>
