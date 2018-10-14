<template>
  <div class="proposal">
    <view-box ref="viewBox" body-padding-top="43px"  body-padding-bottom="42px">
      <!--header-->
      <x-header :left-options="{backText: ''}">投诉建议<a slot="right">我的建议</a></x-header>
      <group title="请选择留言类型">
        <radio :selected-label-style="{color: '#B4A9FD'}" :options="radio001" v-model="radio001Value" @on-change="change"></radio>
      </group>
      <group>
        <x-textarea :max="200" name="detail" placeholder="请输入您的留言" :show-counter="false"></x-textarea>
      </group>
    </view-box>
  </div>
</template>

<script>
export default {
  name: "proposal",
  data () {
    return {
      radio001: [ 'China', 'Japan' ],
      radio001Value: 'China',
      radio002Value: 'Japan'
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

</style>
