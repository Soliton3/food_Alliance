// pages/remlist/remlist.js
var common = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food:{},
    isAdd: false
  },
  //添加收藏
  addLike:function(){
    let food = this.data.food
    wx.setStorageSync(food.f_id, food)
    this.setData({
      isAdd:true
    })
  },
  //取消收藏
  cancelLike: function () {
    let food = this.data.food
    wx.removeStorageSync(food.f_id)
    this.setData({
      isAdd: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    //检查当前美食是否在收藏夹中
    var newfood = wx.getStorageSync(id)
    //已存在
    if (newfood != ''){
      this.setData({
        isAdd:true,
        food: newfood
      })
    }
    //不存在
    else{
      let result = common.getFoodsDetail(id)
      if (result.code == '200') {
        this.setData({
          food: result.foods,
           isAdd: false
        })
      }
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