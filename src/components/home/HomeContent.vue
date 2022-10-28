<template>
  <!-- 轮播图 -->
  <van-swipe 
   class="wj-banner-swipe" 
   :autoplay="3000"
   loop
   :height="bannerHeight"
   indicator-color="#CC3A8C"
  >
    <van-swipe-item @click="toProductHandler(item.goods_id)" class="wj-banner-item" v-for="item in bannerList" :key="item.goods_id">
      <van-image radius="16" lazy-load :src="item.goods_thumb">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-swipe-item>
  </van-swipe>

</template>

<script>

  export default {

    props : ['name', 'id'],

    data(){
      return {
        bannerList : []
      }
    },

    // 计算属性
    computed : {
      bannerHeight(){     
        return 475 / 1000 * (document.documentElement.clientWidth - 20);
      }
    },

    async created(){
     this.bannerList = await this.api.getBannerData();
     console.log(this.bannerList)
    },

    methods : {
      toProductHandler(id){
        this.$router.push({path : '/product', query : {goodsId : id}})
      }
    }

  }

</script>

<style lang="less" scoped>
  .wj-banner-swipe{
    text-align: center;
    line-height: 150px;
    margin-top:10px;

    .wj-banner-item{
      padding: 0px 10px;
      box-sizing: border-box;
    }

  }
</style>