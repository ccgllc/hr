import Vue from 'vue'
import VueRouter from 'vue-router';

// import route view components...
import PersonalInformation from './components/PersonalInformation';
import WorkHistory from './components/WorkHistory';
import Certifications from './components/Certifications';
import Complete from './components/Complete';
import ApplicationProgress from './components/ApplicationProgress';
import SectionTitle from './components/SectionTitle';
import appData from './data/appData.js';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: PersonalInformation },
	{ path: '/work-history', component: WorkHistory },
	{ path: '/certifications', component: Certifications },
	{ path: '/complete', component: Complete }
]

let router = new VueRouter({
	routes
});

let application = new Vue({
	name: 'Application',
	router,
	components: {
		sectionTitle: SectionTitle,
		applicationProgress: ApplicationProgress
	},
	mounted() {
		window.localStorage.token = window.userData.token;
	},
	data() {
		return {
			appData
		}
	}
	// filters: {
	// 	phone(value) {
	// 		console.log(value);
	// 		if(!value) return '';
	// 		value = value.replace(/\b(\d{3})([-.\s]?)+(\d{3})([-.\s]?)+(\d{4})\b/g, '($1) $3-$5')
	// 		return value;
	// 	}
	// }
}).$mount('#apply');