const urls = {
  base: 'http://192.168.8.136:809/pub/m',
  login: '/login',  //登录
  reg: '/reg',  //注册
  smsSend: '/sms/send', //发送短信接口
  captcha: '/captcha', //图片验证码
  usHome: '/us/home',  //首页
  messNews: '/mess/news', //公告列表
  finList: '/fin/list', //余额明细type = 0、现金币明细type = 1、报单币明细type = 2、积分明细type = 4、理财明细type = 5
  usEarnings: '/us/earnings', //佣金明细type= 3
  transWithdrawal: '/trans/withdrawal', //转出
  orderList: '/order/list',  //会员礼包列表
  orderInfo: '/order/info', //会员礼包信息
  orderHandle: '/order/handle',  //支付购买会员礼包
  usTeam: '/us/team', //团队
  usShare: '/us/share', //分享
  messAdd: '/mess/add', //投诉建议
  messRecord: '/mess/record', //我的建议
  usAddress: '/us/address', //收货地址
  usPwd: '/us/pwd', //修改登录和交易密码
  usInfo: '/us/info', //我的
  usExtend: '/us/extend', //修改昵称等信息
  langChe: '/lang/che', //语言
}
module.exports = urls
