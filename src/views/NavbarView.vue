<template>
	<div id="navbar-view">
		<!-- 路由内容 -->
		<router-view></router-view>
		
		<!-- 选项卡切换按钮 -->
		<van-tabbar 
		 route 
		 active-color="#CC3A8C" 
		 inactive-color="#666"
		>
		  <van-tabbar-item
				v-for="item in tabbarList"
				:key="item.id"
				:to="item.to"
			>
				<span>{{item.text}}</span>
				<template #icon="props">
					<van-icon :name="props.active ? item.iconAc : item.icon"></van-icon>
				</template>
			</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				tabbarList : [
					{id : 1, to : '/navbar/index', text : '首页', icon : 'wap-home-o', iconAc : 'wap-home', badge : ''},
					{id : 2, to : '/navbar/classify', text : '分类', icon : 'point-gift-o', iconAc : 'point-gift', badge : ''},
					{id : 3, to : '/navbar/cart', text : '购物车', icon : 'shopping-cart-o', iconAc : 'shopping-cart', badge : ''},
					{id : 4, to : '/navbar/user', text : '我的', icon : 'manager-o', iconAc : 'manager', badge : ''},
				]
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