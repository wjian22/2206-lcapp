<template>

  <div class="wj-ad">
    <div class="ad-l">
      <img :src="adList[0].src" alt="">
      <img :src="adList[1].src" alt="">
      <!-- <img src="./../../../assets/img/1.jpg" alt=""> -->
      <!-- <img :src="requ/ire('../../../assets/img/2.jpg')" alt=""> -->
    </div>
    <div class="ad-r">
      <img :src="adList[2].src" alt="">
      <img :src="adList[3].src" alt="">
      <!-- <img src="./../../../assets/img/3.jpg" alt=""> -->
      <!-- <img src="./../../../assets/img/4.jpg" alt=""> -->
    </div>
  </div>

</template>

<script>
  export default {
    props : ['adList'],
    created(){
      
    }

  }

</script>

<style lang="less" scoped>
  .wj-ad{
    margin-top:10px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    &>div{
      width:49%;
      img{
        width:100%;
        border-radius: 10px;
      }
    }
    &>div img:first-child{
      margin-bottom: 6px;
    }
  }

</style>