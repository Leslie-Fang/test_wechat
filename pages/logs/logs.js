//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    wx.showToast({
      title: '加载成功',
      icon: 'success',
      duration: 1500
    })
  },
  Navigate:function(){
    wx.navigateTo({
      url: '../Introduction/Introduction'
    })
  },
  Back:function(){
    wx.navigateBack()
  }
})
