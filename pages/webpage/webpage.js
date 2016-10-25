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
  connect:function(){
    this.setData({myname:"leslie"})

    wx.chooseImage({
    success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
        url: 'http://10.189.76.110:8082/MyWeb/rest/UserService/uploadimage',
        filePath: tempFilePaths[0],
        name: 'firstfile',
        formData:{
            'user': 'test'
        }
        })
    }
    })

  },
})