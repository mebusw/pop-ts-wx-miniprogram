"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        links: [{ x: 10, y: 10 }, { x: 20, y: 30 }],
    },
    bindViewDone: function () {
        wx.navigateBack({});
    },
    bindAddLinkTap: function (e) {
        console.log(e);
        this.setData({
            links: [{ x: 10, y: 10 }, { x: 20, y: 30 }, { x: 40, y: 30 }]
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDNUM7SUFFRCxZQUFZO1FBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsY0FBYyxZQUFDLENBQU07UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUM5RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtJQUVOLENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vY2FudmFzLmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgbGlua3M6IFt7IHg6IDEwLCB5OiAxMCB9LCB7IHg6IDIwLCB5OiAzMCB9XSxcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdEb25lKCkge1xuICAgIHd4Lm5hdmlnYXRlQmFjayh7fSlcbiAgfSxcblxuICBiaW5kQWRkTGlua1RhcChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbGlua3M6IFt7IHg6IDEwLCB5OiAxMCB9LCB7IHg6IDIwLCB5OiAzMCB9LCB7IHg6IDQwLCB5OiAzMCB9XVxuICAgIH0pXG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=