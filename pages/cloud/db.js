// pages/cloud/db.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  queryDB() {
    console.log("数据库查询");
    const db = wx.cloud.database({
      env:'wxserver-nmrbd'
    });
    // db.collection('datebaseTest').get({
    //   success(res){
    //     console.log(res)//data=>[{},{}]
    //   },
    //   fail:(res)=>{

    //   }
    // })
    db.collection('datebaseTest').get().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  insertDB() {
    console.log("数据库插入");
    // 创建数据库对象
    const db = wx.cloud.database({
      env:'wxserver-nmrbd'//环境id
    });
    // 选择数据库几何，并添加数据
    db.collection("datebaseTest").add({//返回结果也可以为promise
      data: {
        name: "gumeik",
        age: 18,
        createTime: db.serverDate() //服务器端时间
      },
      success: (res) => {
        // 返回信息中的_id 为本条记录的数据库Id
        console.log(res._id)
      },
      fail:(res)=>{
        console.log(res);
      }
    })

  },
  updateDB() {
    console.log("数据库更新")
    const db = wx.cloud.database({
      env:'wxserver-nmrbd'
    });
    db.collection('datebaseTest').doc('e2297d935eb5669900494fbe52fc54d2').update({
      data:{
        name:"更新后的值"
      },
      success(res){
        console.log(res);
      }
    })
  },
  updateDBCloud(){
    // 调用云函数
    wx.cloud.callFunction({
      name:'dbControl',
      data:{
        name:'云端更改'
      }
    }).then(res=>{
      console.log(res);
    })
  },
  deleteDB() {
    console.log("数据库删除")
    const db = wx.cloud.database({
      env:'wxserver-nmrbd'
    });
    db.collection('datebaseTest').doc('6af880a55eb5650b0058ce305e20b7d1').remove().then(res=>{
      console.log(res)
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