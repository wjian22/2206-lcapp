<template>
  
  <div id="search-view">

    <wj-search 
     show-innerleft 
     show-left 
     show-right 
     @clickright="clickRightHandler"
     @clickleft="clickLeftHandler"
    ></wj-search>




  </div>

</template>

<script>
  import WjSearch from '../components/WjSearch.vue'

  export default {
    components : {
      WjSearch
    },

    data(){
      return {
       
      }
    },

    methods : {
      clickRightHandler(val){
        console.log(1111);
        console.log(val);
      },

      clickLeftHandler(){
        // 返回上一级路由
        // console.log(this.$router)
        this.$router.back();
      }
    }
  }

</script>

<style lang="less" scoped>


</style>