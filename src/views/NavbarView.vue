<template>
	<div id="navbar-view">

		<!-- 路由内容 -->
		<!-- 路由渲染 -->
		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__swing" 
			leave-active-class="animate__animated animate__fadeOut"
			>
			<router-view @changebadge="changebadgeH"></router-view>
		</transition>
		<!-- <router-view></router-view> -->

		<!-- 选项卡切换按钮 -->
		<van-tabbar 
		 route 
		 active-color="#CC3A8C" 
		 inactive-color="#666"
		 z-index="999"
		 class="wj-tabbar"
		>
		  <van-tabbar-item
				v-for="item in tabbarList"
				:key="item.id"
				:to="item.to"
				:badge="item.badge"		
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
				cartNumber : '',
			}
		},

		computed : {
			tabbarList(){
				return [
					{id : 1, to : '/navbar/index', text : '首页', icon : 'wap-home-o', iconAc : 'wap-home', badge : ''},
					{id : 2, to : '/navbar/classify', text : '分类', icon : 'point-gift-o', iconAc : 'point-gift', badge : ''},
					{id : 3, to : '/navbar/cart', text : '购物车', icon : 'shopping-cart-o', iconAc : 'shopping-cart', badge : this.cartNumber},
					{id : 4, to : '/navbar/user', text : '我的', icon : 'manager-o', iconAc : 'manager', badge : ''},
				]
			} 
		},
		
		mounted(){
			this.getCartCount();
		},

		methods : {
			changebadgeH(){
				this.getCartCount();
			},

			// 求购物车数量
			getCartCount(){
				let token = window.localStorage.getItem('token');
				if(!token){
					this.cartNumber = '';
					return
				};

				this.api.getCartViewData({
					status : 'viewcart',
					userId : token
				}).then(result => {
					this.cartNumber = result.length;
					console.log(this.cartNumber)
				})
			}
		}
	}
	
</script>

<style lang="less" scoped>
	// .wj-tabbar:before{
	// 	content: '';
	// 	position: absolute;
	// 	left: 0px;
	// 	top:-1px;
	// 	width:100%;
	// 	border-top: 1px solid #eee;
	// 	// transform: scaleY(0.6);
	// }
</style>