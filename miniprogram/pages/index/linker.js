"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewDone: function () {
        wx.navigateBack({});
    },
    onLoad: function () {
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztLQUNwRDtJQUVELFlBQVk7UUFDVixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUVELFdBQVcsWUFBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9saW5rZXIuanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdEb25lKCkge1xuICAgIHd4Lm5hdmlnYXRlQmFjayh7fSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=