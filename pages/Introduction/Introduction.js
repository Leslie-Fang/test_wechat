var showtimes=0
Page({
  data: {
    motto: 'Hello,',
    myname:' LittleCrab',
    array:[{msg:'1'},{msg:'2'}],
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../images/my.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/my.png',
      rotate: 90
    }],
    image1_src:'../../image/my.jpg'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad,Introduction')
    var that = this
  },
  onShow:function(){
    console.log('onShow,Introduction')
  },
  changename:function(){
    this.setData({myname:"leslie"})
  },
  changename2:function(){
      wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  changename3:function(){
      wx.setNavigationBarTitle({
      title: '个人主页'
    }) 
  },
  upload_image:function(){
      var that=this
      wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
       //	  image1_src:'../../image/wechat.png'
            image1_src:tempFilePaths
        })
       /* //没有租用服务器
          wx.uploadFile({
          url: 'http://example.com/upload',
          filePath: tempFilePaths[0],
          name: 'file'
        })
        */
        /*
        //close 当前页面，去往另一个页面，相对应的 navigate to 并不关闭当前的页面
        wx.redirectTo({
          url: '../logs/logs'
        })
        */
        },
      complete:function(res){
         
      }
      })

  },
  towebpage:function()
  {
    wx.navigateTo({
      url: '../webpage/webpage'
    })
  },
})