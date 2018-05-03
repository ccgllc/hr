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
	mounted() {
		this.user = window.userData;
		// this.user.avatar.path = '';
	},
	data() {
		return {
			user: {avatar:{path: '#'}},
			avatarCropper: null,
			showAvatarButton: false,
			addingAvatar: false,
			imgLoaded: false,
		}
	},
	computed: {
		userHasAvatar() {
			return  this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
		},
	},
	methods: {
		uploadImage() {
			console.log('uploading...');
			this.avatarCropper.generateBlob((blob) => {
				let file = new File([blob], "avatar.png", {type: 'image/png'});
				let data = new FormData();
				data.append('avatar', file);
	        	window.axios.post('/api/user/' + window.userData.id + '/avatar/', data).then(response => {
	        		console.log(response);
	        		this.addingAvatar =  false;
	        		this.user.avatar = {
	        			path: response.data
	        		};
	        	})
			});
		},
		hasImage() {
			return this.imgLoaded = !this.imgLoaded;
		},
		toggleAvatarButton() {
			return this.showAvatarButton = !this.showAvatarButton;
		},
		// avatarPath() {
		// 	if (this.userHasAvatar) {
		// 		return this.user.avatar.path;
		// 	}
		// 	return "#";
		// }
	}
}).$mount('#profile');