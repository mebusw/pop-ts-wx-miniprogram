//canvas.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    links: [{ x: 10, y: 10 }, { x: 20, y: 30 }],
  },
  //事件处理函数
  bindViewDone() {
    wx.navigateBack({delta: 0})
  },

  bindAddLinkTap(e: any) {
    console.log(e)
    this.setData!({
      links: [{ x: 10, y: 10 }, { x: 20, y: 30 }, { x: 40, y: 30 }]
    })
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
