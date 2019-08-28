"use strict";
Component({
    properties: {
        paramA: String,
    },
    data: {
        name: "",
    },
    methods: {},
    lifetimes: {
        created: function () {
        },
        ready: function () {
            console.log("paramA=" + this.data.paramA);
        },
    },
    pageLifetimes: {
        show: function () {
        },
        hide: function () {
        },
        resize: function (size) {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUVWLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFLRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBS0QsT0FBTyxFQUFFLEVBSVI7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUU7UUFFVCxDQUFDO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUU7UUFFTixDQUFDO1FBQ0QsSUFBSSxFQUFFO1FBRU4sQ0FBQztRQUNELE1BQU0sRUFBRSxVQUFVLElBQUk7UUFFdEIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvY29tcG9uZXRzL2xpbmsudHNcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIC8vYm9vbCBpc0VkaXRNb2RlLFxuICAgIHBhcmFtQTogU3RyaW5nLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBuYW1lOiBcIlwiLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBcblxuXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1BPVwiK3RoaXMuZGF0YS5wYXJhbUEpXG4gICAgfSxcbiAgfSxcbiAgcGFnZUxpZmV0aW1lczoge1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIOmhtemdouiiq+WxleekulxuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgLy8g6aG16Z2i6KKr6ZqQ6JePXG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAvLyDpobXpnaLlsLrlr7jlj5jljJZcbiAgICB9XG4gIH1cbn0pXG4iXX0=