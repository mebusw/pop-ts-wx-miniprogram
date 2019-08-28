//project.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    uploadedPicPath: 'NA',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad() {
    wx.getStorage({
      key: 'pic0',
      success: res => {
        console.log(res.data)
        this.setData!({
          uploadedPicPath: res.data
        }) 
      }
    })
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
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        //const tempFilePaths = res.tempFilePaths
        console.log(res.tempFiles)
        
        this.setData!({
          uploadedPicPath: res.tempFiles[0].path
        }) 

        // wx.compressImage({
        //   src: res.tempFiles[0].path, // 图片路径
        //   quality: 60, // 压缩质量
        // })

        wx.setStorage({
          key: "pic0",
          data: res.tempFiles[0].path
        })
        
        wx.getStorageInfo({
          success(res) {
            console.log(res.keys)
            console.log(res.currentSize)
            console.log(res.limitSize)
          }
        })

      }
    })

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
