<template>
	<div id="cart-view">
		<van-config-provider :theme-vars="aaaa">
			<van-button color="blue" text="哈哈" />
		</van-config-provider>
		购物车
		
	</div>
</template>

<script>
	export default {
		
		data(){
			return {
				aaaa : {
					buttonDefaultBackgroundColor : 'red',
					buttonDefaultColor : '#fff'
				}
			}
		}
		
	}
</script>

<style>
</style>