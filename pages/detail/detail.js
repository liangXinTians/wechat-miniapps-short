// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true, //自动轮播
        interval: 2000,
        duration: 500,
        current: 0,
        detailInfo: {},
        // detailInfo:{
        //       "Id": 94,
        //       "ShopId": 2,
        //       "GoodsNo": "3403770",
        //       "DataStatus": 2,
        //       "Title": "国产|台湾h258|水壶240cc",
        //       "Classify": 102,
        //       "ClassifyName": "护理",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023505577614.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 48,
        //       "CreateDate": "2018-11-04T18:35:13.000Z",
        //       "UpdateDate": "2018-11-20T16:20:53.000Z",
        //       "Brand": "台湾h258",
        //       "OrderNum": 0,
        //       "SwiperImgList": [
        //         "https://image.maohz.com/netcore/goodsimg/20181105023505577614.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181119174911711201.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181114120643144118.jpg"
        //       ],
        //       "DetailImgList": [
        //         "https://image.maohz.com/netcore/goodsimg/20181105023609436883.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181105023609077672.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181105023609780116.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181105023610467126.jpg",
        //         "https://image.maohz.com/netcore/goodsimg/20181105023610170702.jpg"
        //       ]
        //   },
        goodsNo: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        this.data.goodsNo = options.goodsNo1;
        this.getDetailData();
    },

    getDetailData() {
        let self = this;
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/getWXGoodsInfo',
            data: {
                goodsNo: self.data.goodsNo || ""
                //   goodsNo:'3403770'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log(res.data)
                let result = res.data;
                if (result && result.data) {
                    self.setData({
                        detailInfo: result.data
                    })
                }
            }
        })
    },

    /**
     * 点击轮播图 图片全屏
     */
    showImage() {
        wx.previewImage({
            current: this.data.detailInfo.SwiperImgList[this.data.current], // 当前显示图片的 http 链接
            urls: this.data.detailInfo.SwiperImgList // 需要预览的图片 http 链接列表
        })
    },

    /**
     * 切换swiper事件
     */
    swiperChange(e) {
        let currentNum = e.detail.current;
        this.setData({
            current: currentNum
        })
    },

    /**
     * 跳转主页面
     */
    jumpToHome() {
        wx.switchTab({
            url: '/pages/home/home'
        })
    },

    /**
     * 咨询拨打电话
     */
    onCall() {
        wx.makePhoneCall({
            phoneNumber: '18237375523',
        })
    },

    /**
     * 跳转购物车
     */
    jumpToCart() {
        wx.switchTab({
            url: '/pages/shopcart/shopcart'
        })
    },

    /**
     * 加入购物车
     */
    addToCart() {
        let self=this
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/addCart',
            data:{
                userId: '32977',
                quantity: 1,
                goodsId: self.data.goodsNo
            },
            method: 'POST',
            dataType: 'json',
            success(res){
                if(res.data && res.data.success){
                    wx.showToast({
                      title: '加入成功',
                      icon: 'success',
                      duration: 1000
                    })
                }
            }
        })
    },

    /**
     * 立即购买
     */
    btnBuy() {

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