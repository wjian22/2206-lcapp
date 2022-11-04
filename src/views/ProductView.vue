<template>
  <div id="product-view">

    <wj-navbar left-text="返回" title="商品详情" :show-icon-cart="showIconCart" :cart-number=" cartNumber"></wj-navbar>
    
    <div v-if="isSoldOut">商品已下架</div>

    <div v-else>

      <!-- 调用轮播图 -->
      <wj-banner 
      :banner-list="bannerList"
      :img-size="1500/1500"
      ></wj-banner>

      <!-- 单元格 -->
      <van-cell @click="showPopup = !showPopup" title="选择颜色、尺码、数量" icon="certificate" is-link />

      <!-- 弹出层 -->
      <van-action-sheet 
      v-model:show="showPopup"
      position="bottom"
      round
      closeable
      :close-on-click-overlay="false"
      title="请选择商品"
      >
        <h1 v-for="i in 3">{{i}}</h1>
        <h1>颜色</h1>
        <h1>数量</h1>
        <h1>大小</h1>

        <van-button @click="clickConfirmH" block round color="#cc3a8c" type="default">确定</van-button>
      </van-action-sheet>

      <h2 v-for="a in 30">h2{{a}}</h2>

      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon badge="4" icon="cart-o" text="购物车" />
        <van-action-bar-icon 
         @click="isStar = !isStar" 
         :icon="isStar ? 'star' : 'star-o'" 
         :text="isStar ? '已收藏' : '收藏'" 
         :color="isStar ? '#cc3a8c' : '#666'"
        />
        <van-action-bar-button 
         color="linear-gradient(to right, #FA5FB6, #cc3a8c)" @click="clickAddBuyH('加入购物车')" type="warning" text="加入购物车" />
        <van-action-bar-button
        color="linear-gradient(to right, #ac3a88, #863161)"
        @click="clickAddBuyH('立即购买')" type="danger" text="立即购买" />
      </van-action-bar>


    </div>  

  </div>
</template>

<script>

  export default {

    data(){
      return {
        goods : [],
        bannerList : [],
        showIconCart : false,
        cartNumber : 0,
        isSoldOut : false,
        showPopup : false,
        isStar : false,
        isAddBuy : ''
      }
    },

    methods : {
      // 求购物车数量
      getCartCount(){
        let token = window.localStorage.getItem('token');
        if(!token){
          this.cartNumber = '';
          return
        };

        this.api.getCartViewData({
          status : 'viewcart',
          userId : token
        }).then(result => {
          this.cartNumber = result.length;
        })
      },
      
       // 点击加入购物车
      clickAddBuyH(val){
        // 打开弹出层
        this.showPopup = true;
        // 状态持有
        this.isAddBuy = val;
      },

      // 点击确定按钮
      clickConfirmH(){
        // 关闭弹出层
        this.showPopup = false;
        // 验证当前的商品选项（颜色 大小 数量）
        //验证，再是加入购物车，还是立即购买
        console.log(this.isAddBuy)
        

      },

     
    },

    async created(){
      let res = await this.api.getGoodsData({goodsId : this.$route.query.goodsId});
      console.log(res);
      if(res.length == 0){
        this.isSoldOut = true;
        return;
      };

      this.isSoldOut = false;
      this.goods = res[0];
      this.bannerList = res[0].banner.map(item => {
        return {
          goods_id : this.$route.query.goodsId,
          goods_thumb : item.replace("url('", '').replace("')", '')
        }
      });
      console.log(this.bannerList)
      console.log(this.goods);

    },
    mounted(){
    this.showIconCart = window.localStorage.getItem('token') ? true : false;
    this.getCartCount();
  },

  }

</script>

<style>

  .van-action-sheet__content{
    padding: 20px;
  }

</style>