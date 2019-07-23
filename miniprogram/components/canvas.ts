// pages/componets/canvas.ts

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //string name,
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "abc",
  },

  /**
   * 组件的方法列表
   */
  methods: {

    formatTime(date: Date): string {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()

      return []
    }


  }
})
