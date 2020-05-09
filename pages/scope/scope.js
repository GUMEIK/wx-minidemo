// pages/scope/scope.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserSetting() {
    wx.getSetting({
      // 获取用户订阅消息的订阅状态
      withSubscriptions: true,
      complete: (res) => {
        // 返回作者已经授权的内容
        console.log(res.authSetting);
        // 订阅消息的订阅状态
        console.log(res.subscriptionsSetting)
      }
    })
  },
  // 打开权限设置
  openUserSetting() {
    wx.openSetting({
      complete: (res) => {
        console.log(res);
      }
    })
  },
  // 发起授权请求
  takeAuthorize() {
    wx.authorize({
      // 使用录音权限
      // 权限列表网址
      // https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8
      scope: 'scope.userInfo',
      success() {
        console.log("做获取权限后的工作")
      }
    })
  },
  // 获取用户信息
  getUserInfo() {
    // 必须是在用户已经授权的情况下调用
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName//昵称
        var avatarUrl = userInfo.avatarUrl//头像地址
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province//省份（可能为空）
        var city = userInfo.city//城市（可能为空）
        var country = userInfo.country;//国家（可能为空）
        var language = userInfo.language;//语言
        console.log(userInfo)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})