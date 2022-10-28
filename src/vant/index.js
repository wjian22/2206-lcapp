// 引入vant
import {
	Button,
	Tabbar, 
	TabbarItem,
	ConfigProvider,
	Icon,
	Search,
} from 'vant'

export default function(app){
	app.use(Search)
	app.use(Icon)
	app.use(ConfigProvider)
	app.use(Tabbar)
	app.use(TabbarItem)
	app.use(Button)
}