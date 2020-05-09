// pages/cloud/cloud.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 获取用户ID
   */
  getID(){
    console.log("getID")
    // 调用云函数的方法
    wx.cloud.callFunction({
      name:'login',
      data:{},//传递的参数
      success:res=>{//成功回调
        console.log("success")
        console.log(res.result.openid)
      },
      file:err=>{
        console.log("error")
        console.log(err)
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