// pages/index/index.js
var common = require('../../utils/util.js')
//数据库初始化
const db = wx.cloud.database();
const foods = db.collection("foods");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food:[],
    swiperImg:[
      { src: "cloud://inf-e3208b.696e-inf-e3208b/1.jpg" },
      { src: "cloud://inf-e3208b.696e-inf-e3208b/a.jpg" },
      { src: "cloud://inf-e3208b.696e-inf-e3208b/d.jpg" },
      { src: "cloud://inf-e3208b.696e-inf-e3208b/e.jpg" }
    ]
  },

  goToDetail:function(e) {
    //获取数据
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../remlist/remlist?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getInfoList()
    this.setData({
      foodsList:list
    })

    foods.get().then(res=>{
  //    console.log(res.data)
      this.setData({
        food:res.data
      })
    })
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