<template>
	<div id="navbar-view">
		<!-- 路由内容 -->
		<router-view></router-view>
		
		<!-- 选项卡切换按钮 -->
		<van-tabbar @change="changeNavbarH" route active-color="#8E0AD2" inactive-color="#666">
		  <van-tabbar-item to="/navbar/index" icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item to="/navbar/classify" icon="search">分类</van-tabbar-item>
		  <van-tabbar-item badge="6" :badge-props="{color : 'green'}" to="/navbar/cart" icon="friends-o">购物车</van-tabbar-item>
		  <van-tabbar-item to="/navbar/user">
				<span>我的</span>
				<!-- v-slot:icon全称  简写 v-slot: == #   => #icon -->
				<template v-slot:icon="props">
					<span class="wj-iconfont" :class="props.active ? 'icon-user-filling' : 'icon-user'"></span>
				</template>
			</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				activeName : '/navbar/index'
			}
		},
		
		methods : {
			changeNavbarH(val){
				console.log(val);
			}
		}
	}
	
</script>

<style lang="less" scoped>

</style>