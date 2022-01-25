import Vue from 'vue';
import Router from 'vue-router';
import data from '../data';

import Index from './views/Index';
import Result from './views/Result'
import Questions from './views/Questions'

Vue.use(Router);

let routes = [
	{
		path: "/",
		component: Index,
		meta: {
			key: 1,
		},
	},
	{
		path: "*",
		component: Index,
		meta: {
			key: 101,
		},
	},
	{
		path: '/result',
		component: Result,
		meta: {
			key: 2,
		}
	},
	{
		path: '/questions',
		component: Questions,
		meta: {
			key: 3,
		}
	}
];

if (Object.keys(data.share.dynamic_shares).length > 0) {
	Object.keys(data.share.dynamic_shares).forEach((el) => {
		routes.push({
			path: "/" + el,
			component: Index, Result, Questions,
			name: el,
			meta: {
				key: routes.length + 1,
			},
		});
	})
}

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to) => {
	// eslint-disable-next-line
	gtag('config', data.statistics.GA_ID, { 'page_path': to.path });
});


if (Object.keys(data.share.dynamic_shares).length > 0) {
	router.beforeEach((to, from, next) => {
		if (data.share.dynamic_shares[to.name] === undefined || data.share.dynamic_shares[to.name] === null) {
			document.querySelector('meta[property="og:image"]')['content'] = data.share.default_img
			document.querySelector('meta[property="og:title"]')['content'] = data.share.title
			document.querySelector('meta[property="og:description"]')['content'] = data.share.description
			document.querySelector('meta[name="twitter:image"]')['content'] = data.share.default_img
		} else {
			document.querySelector('meta[property="og:image"]')['content'] = data.share.dynamic_shares[to.name].img
			document.querySelector('meta[property="og:title"]')['content'] = data.share.dynamic_shares[to.name].title
			document.querySelector('meta[property="og:description"]')['content'] = data.share.dynamic_shares[to.name].description
			document.querySelector('meta[name="twitter:image"]')['content'] = data.share.dynamic_shares[to.name].img
		}
		next()
	});
}


export default router
