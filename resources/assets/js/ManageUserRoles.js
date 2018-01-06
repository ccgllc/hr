import Vue from 'vue';
// import Resource from './structur/src/services/Resource.js';
import UserRoles from './components/UserRoles.vue';
// import roles from './data/roles.js';
// import search from './components/Search.vue';

Vue.component('userRoles', UserRoles);

Vue.filter('capitalize', function(value) {
	return value[0].toUpperCase() + value.slice(1)
});

let userRoles = new Vue({
	name: 'ManageUserRoles',
	el: '#userRoles',
})

