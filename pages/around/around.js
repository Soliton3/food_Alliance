// pages/around/around.js
const db = wx.cloud.database();
const foods = db.collection("foods");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food:[],
    listname:'美食'
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
    let cat = options.cat
    foods.get().then(res => {
      this.setData({
        food: res.data
      })
    })
    if(cat==1){
      this.setData({
        listname: '推荐美食'
      })
    } else if (cat == 2){
      this.setData({
        listname: '周边美食'
      })
    }
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