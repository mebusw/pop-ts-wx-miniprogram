// pages/componets/link.ts

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //bool isEditMode,
    paramA: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    


  },
  lifetimes: {
    created: function () {
      
    },
    ready: function () {
      console.log("paramA="+this.data.paramA)
    },
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  }
})
