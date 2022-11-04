<template>
  <van-swipe 
   class="wj-banner-swipe"
   :style="{'margin-top' : marginTop+'px'}"
   :autoplay="3000"
   loop
   :height="bannerHeight"
   indicator-color="#CC3A8C"
  >
    <van-swipe-item 
     v-for="item in bannerList" 
     :key="item.goods_id"
     @click="toProductHandler(item.goods_id)" 
     class="wj-banner-item"
     :style="{'padding-left' : paddingLeft+'px', 'padding-right':paddingRight+'px'}"
    >
      <van-image :radius="radius" lazy-load :src="item.goods_thumb">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script>

  export default {
    // props : ['bannerList', 'imgSize', 'marginTop','paddingLeft','paddingRight', 'radius'],
    props : {
      bannerList : Array,
      imgSize : Number,
      marginTop : {
        type : String,
        default : '0'
      },
      paddingLeft : {
        type : String,
        default : '0'
      },
      paddingRight : {
        type : String,
        default : '0'
      },
      radius : {
        type : String,
        default : '0'
      }
    },
     // 计算属性
     computed : {
      bannerHeight(){  
        let sum = parseFloat(this.paddingLeft) + parseFloat(this.paddingRight)
        return this.imgSize * (document.documentElement.clientWidth - sum);
      }
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
    // margin-top:10px;

    .wj-banner-item{
      // padding: 0px 10px;
      box-sizing: border-box;
    }
  }

</style>