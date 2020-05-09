// pages/cloud/files.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  /**
   * 图片上传
   */
  upload(){
    wx.chooseImage({
      complete(){},
      success: (res) => {
        // 获取文件路径
        const tempFilesPath = res.tempFilePaths[0];
        // 进行图片上传
        wx.cloud.uploadFile({
          cloudPath:'files/image1.png',
          filePath:tempFilesPath,
          config:{
            env:'wxserver-nmrbd'
          },
          success(res){
            console.log(res);
          },
          fail(err){
            console.log(err);
          }
        })
      }
    })
  },
  /**
   * 图片下载
   */
  download(){
    console.log("下载")
    const self = this;
    wx.cloud.downloadFile({
      fileID:'cloud://wxserver-nmrbd.7778-wxserver-nmrbd-1302076171/files/image1.png',
      success(res){
        console.log(res.tempFilePath);
        let tempFilePath = res.tempFilePath;
        self.setData({
          imagePath:tempFilePath
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  /**
   * 
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