// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info1: '',
    info2: ''
  },
  submit1(e) {
    const value = e.detail.value;
    this.setData({
      info1: value
    })
    wx.showToast({
      title: '方案一已确认！',
    })
  },
  submit2(e) {
    const value = e.detail.value;
    this.setData({
      info2: value
    })
    wx.showToast({
      title: '方案二已确认！',
    })
  },
  computedIncome(m, n, s) {
    m = parseFloat(m);
    n = parseFloat(n);
    s = parseFloat(s);
    console.log(m,n,s)
    let p = m / n; //此种分期每期应该花费的金
    let income = s * (m * n - p * (n * (n + 1) / 2));
    console.log(income);
    return income;
  },
  compareProgram(incomeArr) {
    const first = incomeArr[0];
    const two = incomeArr[1];
    // 分期时间内获得的收益
    let firstIncome = this.computedIncome(first.m, first.n, first.s);
    let twoIncome = this.computedIncome(two.m, two.n, two.s);
    console.log(firstIncome, twoIncome)
    // 第一种总消费
    let firstConsumption;
    // 第二种总消费
    let twoConsumption;
    if (first.n > two.n) {
      // 第一种分期时间长
      twoIncome = twoIncome + (first.n - two.n) * two.s * (first.m - two.m);
      firstConsumption = first.m - firstIncome;
      twoConsumption = two.m - twoIncome;
    } else {
      // 第二种分期时间长
      firstIncome = firstIncome + (two.n - first.n) * first.s * (two.m - first.m);
      firstConsumption = first.m - firstIncome;
      twoConsumption = two.m - twoIncome;
    }
    const choose = firstConsumption > twoConsumption ? "方案二" : "方案一"
    return [firstConsumption, twoConsumption,choose];
  },
  // 计算
  compute() {
    const info1 = this.data.info1;
    const info2 = this.data.info2;
    if (info1 === "" || info2 === "") {
      wx.showToast({
        title: '填写完成信息以后，请确认方案！',
      })
      return;
    }
    const infoArr = [info1, info2];
    const resultArr = this.compareProgram(infoArr);
    wx.showModal({
      title:`经过计算，方案一合计消费${resultArr[0]}元，方案二合计花费${resultArr[1]}元,所以推荐使用${resultArr[2]}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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