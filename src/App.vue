<template>
	
	<!-- 路由渲染 -->
	<transition
	 mode="out-in"
	 enter-active-class="animate__animated animate__swing" 
   leave-active-class="animate__animated animate__fadeOut"
	>
		<router-view></router-view>
	</transition>
	
</template>

<style lang="less"></style>
