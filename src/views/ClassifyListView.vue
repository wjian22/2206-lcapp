<template>
  <div id="classify-list">

    <!-- 分类列表里面 调用导航栏 -->
    <wj-navbar title="商品列表" :show-icon-cart="false" cart-number="6"></wj-navbar>
    <!-- <wj-navbar title="商品列表" :show-icon-cart="false" cart-number="6"></wj-navbar> -->

    <h1 v-for="item in 30">上{{item}}</h1>

  </div>
</template>

<script>

import WjNavbar from '../components/WjNavbar.vue'

export default {
  components : {
    WjNavbar,
  }
}

</script>

<style>

</style>