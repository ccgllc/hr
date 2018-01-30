import Vue from 'vue';
import VueRouter from 'vue-router';
import Croppa from 'vue-croppa';

import PersonalInformation from './PersonalInformation';
import Licenses from './Licenses';
import Documents from './Documents';
import Certifications from './Certifications';
import WorkHistory from './WorkHistory';
import profileNavigation from './ProfileNavigation'


Vue.use(VueRouter);
Vue.use(Croppa, { componentName: 'avatar-cropper' });

const routes = [
	{ path: '/', name: "home", component: PersonalInformation },
	{ path: '/licenses', name: "licenses", component: Licenses },
	{ path: '/documents', name: 'documents', component: Documents },
	{ path: '/work-history', name: "workHistory", component: WorkHistory },
	{ path: '/certifications', name: 'certifications', component: Certifications },
	// { path: '/complete', component: Complete }
];

let router = new VueRouter({
	routes,
	linkActiveClass: 'is-active'
})

// router.beforeEach((to, from, next) => {
  
// })

const Profile = new Vue({
	name: 'Profile',
	router,
	components: {
		profileNavigation,
	},
	data() {
		return {
			avatarCropper: null,
			showAvatarButton: false,
			addingAvatar: false,
		}
	},
	methods: {
		toggleAvatarButton() {
			console.log('toggling..');
			return this.showAvatarButton = !this.showAvatarButton;
		}
	}
}).$mount('#profile');