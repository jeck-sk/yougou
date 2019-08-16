
import request from '../../utils/request.js'
Page({
  data: {
    imgUrls: [
      //  'https://api.zbztb.cn/pyg/banner1.png',
      //  'https://api.zbztb.cn/pyg/banner2.png',
      //  'https://api.zbztb.cn/pyg/banner3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    nav:[
      'https://api.zbztb.cn/pyg/icon_index_nav_4@2x.png'
    ],
    floordata:[]
  },
  onLoad() {
    // 请求轮播图数据
    request({
      url: "/home/swiperdata"
    }).then(res => {
      // 返回的数组
      const { message } = res.data;
    
      // 修改imgUrls
      this.setData({
        imgUrls: message
      })
    });
  request({
      url: '/home/catitems',
    }).then(res=>{
      const { message } = res.data;
      console.log(message)
      this.setData({
        nav: message
      })
    });
    request({
      url: '/home/floordata',
    }).then(res => {
      const { message } = res.data;
      console.log(message)
      this.setData({
        floordata: message
      })
    })
  }
})
