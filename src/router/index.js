import Vue from 'vue'
import Router from 'vue-router'
/*
- HomePage 主页
- AboutUs 关于我们
- SuccessCase 成功案例
- OurRecord 我们遍布的足迹
- OurCulture 我们的理念
- ContactUs 联系我们
6个
*/
import homePage from '@/pages/homePage/homePage.vue'
import aboutUs from '@/pages/aboutUs/aboutUs.vue'
import successCase from '@/pages/successCase/successCase.vue'
import ourRecord from '@/pages/ourRecord/ourRecord.vue'
import ourCulture from '@/pages/ourCulture/ourCulture.vue'
import contactUs from '@/pages/contactUs/contactUs.vue'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: homePage,
		meta: {
			realName: '首页'
		}
	}, {
		path: '/aboutUs',
		name: 'aboutUs',
		component: aboutUs,
		meta: {
			realName: '关于我们'
		}
	}, {
		path: '/successCase',
		name: 'successCase',
		component: successCase,
		meta: {
			realName: '成功案例'
		}
	}, {
		path: '/ourRecord',
		name: 'ourRecord',
		component: ourRecord,
		meta: {
			realName: '我们遍布的足迹'
		}
	}, {
		path: '/ourCulture',
		name: 'ourCulture',
		component: ourCulture,
		meta: {
			realName: '我们的理念'
		}
	}, {
		path: '/contactUs',
		name: 'contactUs',
		component: contactUs,
		meta: {
			realName: '联系我们'
		}
	}, {
		path: '*',
		redirect: '/'
	}]
})
