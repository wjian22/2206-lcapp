<template>

    <van-nav-bar 
     :title="title"
     left-arrow
     left-text="返回"
     placeholder
     fixed
     safe-area-inset-top
     @click-left="clickLeftHandler"
    >

      <template v-if="title == '商品列表'" #right>
        <span @click="$router.push('/login')" v-if="!showIconCart" style="color: #fff;">登录</span>
        <van-icon @click="$router.push('/navbar/cart')" v-if="showIconCart" size="24" name="cart-o" :badge="cartNumber"></van-icon>
      </template>

    </van-nav-bar>

</template>

<script>
  export default {
    props : ['title', 'cartNumber', 'showIconCart'],
    methods : {
      clickLeftHandler(){
        this.$router.back();
      }
    }

  }
</script>

<style lang="less" scoped>

</style>