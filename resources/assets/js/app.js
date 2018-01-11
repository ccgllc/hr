require('./bootstrap');
import Vue from 'vue';
import Chart from 'chart.js';
// import VueRouter from 'vue-router';
// import axios from 'axios';


// Vue.prototype.$http = axios

// let app = new Vue({
// 	name: 'App',
// 	el: "#app",
// 	mounted() {
// 		console.log('this is app.js');
// 	}
// });
import search from './components/Search.vue';

let app = new Vue({
	name: "App",
	el: "#app",
	components: {
		search
	},
	mounted() {
		document.addEventListener('DOMContentLoaded', function () {
		  // allow mobile navigation.
		  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		  if ($navbarBurgers.length > 0) {
		    $navbarBurgers.forEach(function ($el) {
		      $el.addEventListener('click', function () {
		        var target = $el.dataset.target;
		        var $target = document.getElementById(target);
		        $el.classList.toggle('is-active');
		        $target.classList.toggle('is-active');
		      });
		    });
		  }
		});
	}
})