// 引入axios
import axios from 'axios'
import qs from 'qs'

export default {
  // 请求搜索数据的方法
  async getSearchData(obj){
    let { data } = await axios.get('http://159.75.89.136:3000/api_search', {
      params : obj
    });
    if(data.code != 0){
      console.log(data)
      console.log('请求搜索数据');
      return;
    };
    return data.data;
  },
  
  // 请求分类数据的方法
  async getCatData(){
    let { data } = await axios.get('http://159.75.89.136:3000/api_cat');
    if(data.code != 0){
      console.log(data)
      console.log('请求导航分类数据');
      return;
    };
    return data.data;
  },

  // 请求分类数据的方法
  async getGoodsData(datas){
    let { data } = await axios.get('http://159.75.89.136:3000/api_goods', {
      params : datas
    });
    // console.log(data);
    if(data.code != 0){
      console.log(data)
      console.log('请求导航分类数据');
      return;
    };
    // console.log(data.data)
    return data.data;
  },

  // 请求轮播图数据方法
  async getBannerData(){
    let { data } = await axios.get('http://159.75.89.136:3000/api_banner', {
      params : {
        bannerId : 1
      }
    });
    if(data.code != 0){
      console.log(data)
      console.log('请求导航分类数据');
      return;
    };
    return data.data;
  },

  // 请求小分类标题数据的方法
  async getClassifyData(){
    let { data } = await axios.get('http://159.75.89.136:3000/api_classify');
    if(data.code != 0){
      console.log(data)
      console.log('请求导航分类数据');
      return;
    };
    return data.data;
  },

}