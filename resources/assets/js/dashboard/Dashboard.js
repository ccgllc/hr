import Vue from 'vue';
import VueRouter from 'vue-router';

import dashboardHome from './components/Home.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: "home", component: dashboardHome },
	// { path: '/licenses', name: "licenses", component: Licenses },
	// { path: '/certifications', component: Certifications },
	// { path: '/complete', component: Complete }
];

let router = new VueRouter({
	routes,
	linkActiveClass: 'is-active'
})

const Dashboard = new Vue({
	name: 'Dashboard',
	router,
	components: {
		//root vue components here.
	},
	data() {
		return {
			//Dashboard Data.
		}
	},
}).$mount('#dashboard');