// pages/login/login.js
//数据库初始化
const db = wx.cloud.database();
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMsg:false,
    nullMsg:false
  },
  //登陆页面的判断和跳转
  login(event){
    let username = event.detail.value.username
    let pwd = event.detail.value.pwd
    
    if(username.length == 0 ||pwd.length == 0){
      this.setData({
        nullMsg:true
      })
      return
    }

    db.collection('users').where({
      account:username,
      pwd:pwd
    }).get().then(res=>{
      console.log(res.data)
      if(res.data[0] == null){
        this.setData({
          showMsg:true
        })
        return
    } else{
        this.setData({
          showMsg: false
        })
        //获取用户id
        app.appUser = res.data[0];
        wx.switchTab({
          url: '../index/index',
        })
    }
    })
  },

  getin(event){
    if(event.detail.value.length>0){
      this.setData({
        nullMsg:false
      })
    }
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