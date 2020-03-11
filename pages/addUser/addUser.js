//初始化云端数据库

const db = wx.cloud.database();
const users = db.collection("users");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  onSumbit:function(event){
    // console.log(event.detail.value);
    users.add({
      data:{
        account: event.detail.value.account,
        pwd: event.detail.value.pwd
      }
    }).then(res=>{
      console.log(res)
    })

  }
})