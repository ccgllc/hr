import Vue from 'vue';
// import Resource from './structur/src/services/Resource.js';
import Roles from './components/Roles.vue';

Vue.component('roles', Roles);

Vue.filter('capitalize', function(value) {
	return value[0].toUpperCase() + value.slice(1)
	});

let manageRoles = new Vue({
	name: 'ManageRoles',
	el: '#roles'
})