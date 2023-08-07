// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user:{},
    },
    // //发起GET数据请求
    // getInfo(){},
    // //发起POST亲请求
    // postInfo(){
    //     wx.request({
    //         url: 'https://www.escook.cn/api/post',
    //         method: "POST",
    //         data: {
    //             name: 'ls',
    //             age: 21
    //         },
    //         success: (res) => {
    //             console.log(res.data)
    //         }
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let userInfo=wx.getStorageSync('userInfo')
        if(userInfo){
            this.setData({
                user: userInfo
            })
        }
    },

    /*
    *获取用户信息
    */
    bindGetUserInfo(e) {
        console.log(e.detail.userInfo)
        console.log(11111)
        this.setData({
            user: e.detail.userInfo
        })

        wx.setStorageSync('userInfo', e.detail.userInfo)
    },

    /**
     * 跳转到订单页面
    */
   jumpOrder(){
    wx.switchTab({
      url: '/pages/order/order',
    })
   },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})