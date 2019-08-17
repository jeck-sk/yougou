import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    keyname:''
  },
  handleChange(event){
    const { index } = event.currentTarget.dataset;

    this.setData({
      current: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keyname='小米'
    request({
      url: '/goods/search',
       data:{
         query: keyname
       }
     }).then(res=>{
        console.log(res)
     })
  },

  
})