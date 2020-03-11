// pages/follow/follow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    snum:0,
    foodsList:[]
  },
  //更新number
  getMyLike:function(){
    let info = wx.getStorageInfoSync()  //读取本地缓存信息
    let keys = info.keys        //获取全部key信息
    let num = keys.length       //获取美食收藏数量

    let myList = [];
    for( var i = 0 ;i < num ;i++ ){
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    //更新收藏列表
    this.setData({
      foodsList: myList,
      snum:num
    })
  },
  goToDetail: function (e) {
    //获取数据
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../remlist/remlist?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorageSync('logs')
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
    this.getMyLike()
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