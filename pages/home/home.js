// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: ['/images/swiper1.jpg', '/images/swiper2.jpg', '/images/swiper3.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        goodsData:[],
        // goodsData:[
        //     {
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
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 96,
        //       "ShopId": 2,
        //       "GoodsNo": "1666748",
        //       "DataStatus": 2,
        //       "Title": "国产|乐宠乐喷|宠物室内喷雾300ml",
        //       "Classify": 102,
        //       "ClassifyName": "护理",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023518452522.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 65,
        //       "CreateDate": "2018-11-04T18:35:24.000Z",
        //       "UpdateDate": "2018-11-20T16:20:39.000Z",
        //       "Brand": "乐宠乐喷",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 97,
        //       "ShopId": 2,
        //       "GoodsNo": "2567213",
        //       "DataStatus": 2,
        //       "Title": "国产|海洋之星|猫罐头70g",
        //       "Classify": 401,
        //       "ClassifyName": "猫粮",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023524920166.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 12,
        //       "CreateDate": "2018-11-04T18:35:33.000Z",
        //       "UpdateDate": "2018-11-19T09:26:10.000Z",
        //       "Brand": "海洋之星",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 98,
        //       "ShopId": 2,
        //       "GoodsNo": "4824810",
        //       "DataStatus": 2,
        //       "Title": "国产|雪诗雅|猫罐头85g",
        //       "Classify": 401,
        //       "ClassifyName": "猫粮",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023534280943.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 14,
        //       "CreateDate": "2018-11-04T18:35:41.000Z",
        //       "UpdateDate": "2018-11-19T09:26:53.000Z",
        //       "Brand": "雪诗雅",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 101,
        //       "ShopId": 2,
        //       "GoodsNo": "4267102",
        //       "DataStatus": 2,
        //       "Title": "进口|k9|狗罐头170g",
        //       "Classify": 402,
        //       "ClassifyName": "狗粮",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023601295175.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 33,
        //       "CreateDate": "2018-11-04T18:36:06.000Z",
        //       "UpdateDate": "2018-11-19T09:32:00.000Z",
        //       "Brand": "k9",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 103,
        //       "ShopId": 2,
        //       "GoodsNo": "3254777",
        //       "DataStatus": 2,
        //       "Title": "进口|巅峰|猫罐头85g",
        //       "Classify": 401,
        //       "ClassifyName": "猫粮",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023611311629.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 28,
        //       "CreateDate": "2018-11-04T18:36:23.000Z",
        //       "UpdateDate": "2018-11-19T09:35:37.000Z",
        //       "Brand": "巅峰",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 105,
        //       "ShopId": 2,
        //       "GoodsNo": "1427746",
        //       "DataStatus": 2,
        //       "Title": "国产|perfect|鳖蛋粉100g",
        //       "Classify": 401,
        //       "ClassifyName": "猫粮",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023630999281.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 145,
        //       "CreateDate": "2018-11-04T18:36:34.000Z",
        //       "UpdateDate": "2018-11-19T09:36:52.000Z",
        //       "Brand": "perfect",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 106,
        //       "ShopId": 2,
        //       "GoodsNo": "3884443",
        //       "DataStatus": 2,
        //       "Title": "钢骨|狗狗磨牙棒洁齿除口臭L号鸡肉",
        //       "Classify": 102,
        //       "ClassifyName": "护理",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023635030899.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 30,
        //       "CreateDate": "2018-11-04T18:36:42.000Z",
        //       "UpdateDate": "2018-11-20T16:27:06.000Z",
        //       "Brand": "钢骨",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 107,
        //       "ShopId": 2,
        //       "GoodsNo": "3063281",
        //       "DataStatus": 2,
        //       "Title": "进口|先牧仕|山羊奶粉340g",
        //       "Classify": 101,
        //       "ClassifyName": "零食",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023643124116.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 156,
        //       "CreateDate": "2018-11-04T18:36:46.000Z",
        //       "UpdateDate": "2018-11-20T16:13:41.000Z",
        //       "Brand": "先牧仕",
        //       "OrderNum": 0
        //     },
        //     {
        //       "Id": 108,
        //       "ShopId": 2,
        //       "GoodsNo": "4242048",
        //       "DataStatus": 2,
        //       "Title": "进口|谷登|卵磷脂美毛亮毛350g",
        //       "Classify": 101,
        //       "ClassifyName": "零食",
        //       "GoodsImage": "https://image.maohz.com/netcore/goodsimg/20181105023647170170.jpg",
        //       "Stock": 10,
        //       "SaleAmount": 79,
        //       "CreateDate": "2018-11-04T18:36:51.000Z",
        //       "UpdateDate": "2018-11-20T16:13:25.000Z",
        //       "Brand": "谷登",
        //       "OrderNum": 0
        //     }
        //   ],
        pageNo: 1,
        pageSize: 10, 
        isComplete: false
      },

 

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        this.getGoodsData();
    },
    /**
     * 获取商品列表
     * */
    getGoodsData(){
        let self = this;
        wx.showLoading({
          title: '加载中',
        })
        wx.request({
            // url: 'https://ys.lumingx.com/api/manage/GoodsList?pageNo=1&pageSize=10', 
            url: 'https://ys.lumingx.com/api/manage/GoodsList', 
            data: {
              pageNo: self.data.pageNo,
              pageSize: self.data.pageSize
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
            //   console.log(res.data)
              wx.hideLoading();
              let reult = res.data
              if(reult.success && reult.data.length>0){
                  let newData  = self.data.goodsData.concat(reult.data)
                  self.setData({
                      goodsData: newData
                  })
              }else{
                  self.setData({
                      isComplete:true
                  })
              }
            }
          })
    },
    /**
     * 跳转到商品详情页面
     */
     jumpDetail(e){
         let goodsNo = e.currentTarget.dataset.goodsid;
         wx.navigateTo({
           url: '/pages/detail/detail?goodsNo1=' + goodsNo,
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
        this.setData({

        })
        setTimeout(function(){//一秒后停止刷新
            wx.stopPullDownRefresh()
        },1000)

        this.data.pageNo=1;
        this.data.goodsData=[];
        this.getGoodsData();

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.getGoodsData();
        this.data.pageNo++;
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})