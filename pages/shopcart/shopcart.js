// pages/shopcart/shopcart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalPrice: 0,
        cartList: [],
        isCheckedAll: false,
        isNoResult: false
    },

    /**
     * 购物车删除选中页
     */
    btnDel() {
        let self = this
        let totalCount = 0
        let selectIds = []
        self.data.cartList.forEach(item => {
            if (item.isChecked) {
                totalCount += item.Quantity
                selectIds.push(item.GoodsId)
            }
        })
        if (totalCount == 0) {
            wx.showToast({
                title: '请选择商品',
            })
            return
        }

        wx.showModal({
            title: '提示',
            content: '您确定要删除吗',
            success(res) {
                if (res.confirm) {
                    self.delCart(selectIds)
                    // console.log('用户点击确定')
                    // wx.request({
                    //   url: 'https://ys.lumingx.com/api/miniapps/delCart',
                    //   method:'POST',
                    //   data:{
                    //       userId:"32977",
                    //       ids:selectIds
                    //   },
                    //   success(res){
                    //     self.getCartData()
                    //     self.setData({
                    //         isCheckedAll:false,
                    //         totalPrice:0
                    //     })
                    //   }
                    // })
                } else if (res.cancel) {
                    // console.log('用户点击取消')
                }
            }
        })
    },

    /**
     * 删除功能 网络请求
     */
    delCart(selectIds) {
        let self = this
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/delCart',
            method: 'POST',
            data: {
                userId: "32977",
                ids: selectIds
            },
            success(res) {
                self.getCartData()
                self.setData({
                    isCheckedAll: false,
                    totalPrice: 0
                })
            }
        })
    },



    /**
     * 购物车全选反选功能
     */
    checkAll() {
        let self = this;
        let checkedAll = !self.data.isCheckedAll;
        self.setData({
            isCheckedAll: checkedAll
        })

        let list = self.data.cartList;
        let totalAmount = 0;
        list.forEach((item) => {
            //全部选中或取消
            if (checkedAll) {
                item.isChecked = true
                totalAmount += item.SaleAmount * item.Quantity
            } else {
                item.isChecked = false;
            }
        })

        self.setData({
            cartList: list,
            totalPrice: totalAmount,
        })
    },

    /**
     * 购物车单选
     */
    checkboxChange(e) {
        let self = this
        let ids = e.detail.value

        let list = self.data.cartList
        let totalPrice = 0
        //总的商品循环
        list.forEach(item => {
            item.isChecked = false
            //选中的商品的循环
            ids.forEach(id => {
                if (item.Id == id) {
                    totalPrice += item.SaleAmount * item.Quantity
                    item.isChecked = true
                }
            })
        })

        let isAll = list.every(item => item.isChecked)

        self.setData({
            totalPrice: totalPrice,
            isCheckedAll: isAll
        })

    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getCartData()
    },

    /**
     * 获取购物车列表
     */
    getCartData() {
        let self = this;
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/getCardList',
            data: {
                userId: "32977"
            },
            dataType: "json",
            method: "GET",
            success(res) {
                console.log(res)
                let result = res.data;
                if (result && result.success && result.data.length > 0) {
                    self.setData({
                        cartList: result.data,
                        isNoResult: false
                    })
                } else {
                    self.setData({
                        isNoResult: true
                    })
                }
            }
        })
    },

    /**
     * 跳转到首页
     */
    gotoHome() {
        wx.switchTab({
            url: '/pages/home/home',
        })
    },

    /**
     * 增加商品数量
     */
    addGoods(e) {
        //    console.log(e)
        let self = this;
        let index = e.currentTarget.dataset.index;
        let item = self.data.cartList[index];
        // console.log(item)
        item.Quantity++;
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/updateCart',
            data: {
                userId: '32977',
                quantity: item.Quantity,
                GoodsId: item.GoodsId
            },
            method: "POST",
            success(res) {
                //   console.log(res)
                if (res.data && !res.data.success) {
                    wx.showToast({
                        title: '增加成功',
                        icon: 'none'
                    })
                    //增加后重新计算选中的总价格
                    let list = self.data.cartList
                    let totalAmount=0
                    list.forEach(item =>{
                        if(item.isChecked){
                            totalAmount += item.Quantity*item.SaleAmount
                        }
                    })
                    self.setData({
                        cartList: self.data.cartList,
                        totalPrice:totalAmount
                    })
                }
            }

        })
    },

    /**
     * 减少商品数量
     */
    reduceGoods(e) {
        //    console.log(e)
        let self = this;
        let index = e.currentTarget.dataset.index;
        let item = self.data.cartList[index];
        // console.log(item)
        if(item.Quantity == 1){
            wx.showToast({
              title: '受不了了宝贝,再减少就没有了',
              icon: 'none'
            })
            return
        }
        item.Quantity--;
        wx.request({
            url: 'https://ys.lumingx.com/api/miniapps/updateCart',
            data: {
                userId: '32977',
                quantity: item.Quantity,
                GoodsId: item.GoodsId
            },
            method: "POST",
            success(res) {
                //   console.log(res)
                if (res.data && !res.data.success) {
                    wx.showToast({
                        title: '减少成功',
                        icon: 'none'
                    })

                    //减少后重新计算选中的总价格
                    let list = self.data.cartList
                    let totalAmount=0
                    list.forEach(item =>{
                        if(item.isChecked){
                            totalAmount += item.Quantity*item.SaleAmount
                        }
                    })
                    self.setData({
                        cartList: self.data.cartList,
                        totalPrice:totalAmount
                    })
                }
            }

        })
    },
    /**
     * 购物车input框改变
    */
    // changeGoods(e){
    //     console.log(e)
    //     let self = this;
    //     let index = e.currentTarget.dataset.index;
    //     let value = e.detail.value
    //     let item = self.data.cartList[index];
    //     item.Quantity = value;
    //     console.log(item)

    //     wx.request({
    //         url: 'https://ys.lumingx.com/api/miniapps/updateCart',
    //         data: {
    //             userId: '32977',
    //             quantity: item.Quantity,
    //             GoodsId: item.GoodsId
    //         },
    //         method: "POST",
    //         success(res) {
    //             //   console.log(res)
    //             if (res.data && !res.data.success) {
    //                 wx.showToast({
    //                     title: '更新数据',
    //                     icon: 'none'
    //                 })

    //                 //改变数据后重新计算选中的总价格
    //                 let list = self.data.cartList
    //                 let totalAmount=0
    //                 list.forEach(item =>{
    //                     if(item.isChecked){
    //                         totalAmount += item.Quantity*item.SaleAmount
    //                     }
    //                 })
    //                 self.setData({
    //                     cartList: self.data.cartList,
    //                     totalPrice:totalAmount
    //                 })
    //             }
    //         }

    //     })
    // },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getCartData()
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