<template>
	<div id="index-view">
		<wj-search show-innerleft disabled @click="toSearchHandler"></wj-search>
	</div>
</template>

<script>
	// 引入组件
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
			toSearchHandler(){
				//跳转到搜索页面
				console.log(this.$router)
				this.$router.push('/search');
			}
		}
	}
</script>

<style lang="less" scoped>
	.logo{
    color: var(--baseColor);
    font-size: 12px;
    border-right: 1px solid #666;
    padding-right: 8px;
  }
</style>