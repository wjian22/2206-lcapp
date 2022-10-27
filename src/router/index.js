import { createRouter, createWebHashHistory } from 'vue-router'

// 引入路由组件
import NavbarView from '../views/NavbarView.vue'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import ClassifyView from '../views/ClassifyView.vue'
import CartView from '../views/CartView.vue'
import UserView from '../views/UserView.vue'

//配置路由
let routes = [
	// 选项路由
	{
		path : '/',
		redirect : '/navbar/index'
	},
	
	{
		path : '/navbar',
		component : NavbarView,
		children : [
			{path : '/navbar/index', component : IndexView},
			{path : '/navbar/classify', component : ClassifyView},
			{path : '/navbar/cart', component : CartView},
			{path : '/navbar/user', component : UserView},
		]
	},
	//登录路由页面
	{
		path : '/login',
		component : LoginView
	},
]

// 创建路由实例
const router = createRouter({
	history : createWebHashHistory(),
	routes,
})

// 导出
export default router
