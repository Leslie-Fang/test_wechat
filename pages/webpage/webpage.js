Page({
    data: {
        myname:'hh',
  },
onLoad: function () {
    console.log('onLoad,webpage')
    var that = this
  },
  onShow:function(){
    console.log('onShow,webpage')
  },
  //fail for not ready in the server side
  connect:function(){
    this.setData({myname:"leslie"})
    wx.chooseImage({
    success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          // url: 'http://10.189.76.110:8082/MyWeb/rest/UserService/uploadimage',
          url: 'http://150.95.134.113:3000/uploadimage/',
          filePath: tempFilePaths[0],
          name: 'imagefile',
          //formData:{
          //    'user': 'test'
          //}
        })
    }
    })
  },
  showtoast:function(){
    wx.showToast({
      title: '加载成功',
      icon: 'success',
      duration: 1500
    })
  },
})