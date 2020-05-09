// 云函数入口文件
const cloud = require('wx-server-sdk')
// 云对象的初始化
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 创建一个云的上下文
  const wxContext = cloud.getWXContext()
  // 通过上下文获取信息
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}