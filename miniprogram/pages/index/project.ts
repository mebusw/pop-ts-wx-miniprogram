//project.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindPlayTap() {
    wx.navigateTo({
      url: './play'
    })

  },

  bindAddTap() {
    wx.chooseImage({})
  },
  onLoad() {

  },

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
