//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    name:'hello leslie'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  changeName:function(e){
    this.setData({name:'expect'})
  },
  navigate2second:function(e)
  {
    wx.navigateTo({url:'../second/second'})
  }
})
